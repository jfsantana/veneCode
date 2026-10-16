#!/bin/bash

# =================================================================
# Script de Despliegue Automatizado - veneCode
# =================================================================

# Configuración de variables
PROJECT_PATH="/home/venecode.com/public_html"
USER_SITE="venec3323"
APP_NAME="venecode"

# Colores para que la terminal se vea profesional
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}===> Iniciando despliegue de $APP_NAME...${NC}"

# 1. Entrar al directorio
cd $PROJECT_PATH || { echo -e "${RED}Error: No se pudo entrar al directorio${NC}"; exit 1; }

# 2. Bajar cambios de Git con el usuario del sitio (para evitar líos de permisos)
echo -e "${GREEN}===> Bajando cambios de GitHub...${NC}"
sudo -u $USER_SITE git pull || { echo -e "${RED}Error en git pull${NC}"; exit 1; }

# 3. Instalar dependencias nuevas (por si acaso)
echo -e "${GREEN}===> Verificando dependencias con pnpm...${NC}"
pnpm install || { echo -e "${RED}Error en pnpm install${NC}"; exit 1; }

# 4. Compilar el proyecto (Indispensable para Next.js)
echo -e "${GREEN}===> Compilando el proyecto (pnpm build)...${NC}"
pnpm build || { echo -e "${RED}Error en pnpm build${NC}"; exit 1; }

# 5. Reiniciar la aplicación en PM2
echo -e "${GREEN}===> Reiniciando proceso en PM2...${NC}"
pm2 restart $APP_NAME || { echo -e "${RED}Error al reiniciar PM2${NC}"; exit 1; }

echo -e "${BLUE}===> ¡Despliegue finalizado con éxito! La web está actualizada.${NC}"

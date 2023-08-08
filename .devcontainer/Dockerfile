# Argument for the pnpm version to install
ARG PNPM_VERSION="8.6.12"
# Which image to use as a base
ARG IMAGE="mcr.microsoft.com/vscode/devcontainers/base"
# Which tag to use for the image
ARG VARIANT="1-ubuntu-22.04"
# Argument for the Node.js version to install along with npm, yarn and pnpm
ARG NODE_VERSION="20"

# Arguments related to setting up a non-root user for the container
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

#########################
# Final image
#########################
FROM ${IMAGE}:${VARIANT}

# Make sure arguments are available
ARG PNPM_VERSION
ARG NODE_VERSION
ARG USERNAME
ARG USER_UID
ARG USER_GID

RUN apt update \
    # Upgrade the system
    && apt upgrade -yq \
    # Install general utilities
    && apt install -yq --no-install-recommends sudo software-properties-common ca-certificates apt-transport-https \
    git git-lfs bash-completion curl wget \
    # Update ca-certificates
    && update-ca-certificates \
    # Install Node.js
    && curl -sL "https://deb.nodesource.com/setup_${NODE_VERSION}.x" | bash -E - \
    && apt update \
    && apt install -yq nodejs \
    && npm i -g npm \
    && npm i -g yarn \
    && npm i -g pnpm@${PNPM_VERSION} \
    # Set up pnpm
    && SHELL=bash pnpm setup \
    # Easier tabbing through files
    && echo "bind TAB:menu-complete" >>/home/${USERNAME}/.bashrc \
    && echo "bind '\"\e[Z\":menu-complete-backward'" >>/home/${USERNAME}/.bashrc \
    # Make the user a sudo user
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    # Remove some bloat
    && apt clean 

EXPOSE 3000

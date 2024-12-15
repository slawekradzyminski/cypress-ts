#!/bin/bash

curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft-archive-keyring.gpg
sudo mv microsoft-archive-keyring.gpg /usr/share/keyrings/
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-archive-keyring.gpg] https://packages.microsoft.com/repos/edge stable main" | sudo tee /etc/apt/sources.list.d/microsoft-edge-stable.list
sudo apt update
sudo apt install -y microsoft-edge-stable 
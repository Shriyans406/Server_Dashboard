#!/bin/bash

SERVICE=$1

if [ -z "$SERVICE" ]; then
  echo "ERROR: No service name provided"
  exit 1
fi

sudo systemctl stop $SERVICE

echo "Service $SERVICE stopped"
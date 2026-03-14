#!/bin/bash

LOG_NAME=$1
LOG_PATH="/var/log/$LOG_NAME"

if [ -z "$LOG_NAME" ]; then
  echo "ERROR: No log name provided"
  exit 1
fi

if [ ! -f "$LOG_PATH" ]; then
  echo "ERROR: Log file $LOG_NAME not found"
  exit 1
fi

tail -n 50 "$LOG_PATH"
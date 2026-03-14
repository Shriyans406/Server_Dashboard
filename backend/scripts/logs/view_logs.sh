#!/bin/bash

# Get log filename from argument
LOG_FILE=$1

# Check if argument is provided
if [ -z "$LOG_FILE" ]; then
  echo "ERROR: No log file provided"
  exit 1
fi

# Construct full log path
LOG_PATH="/var/log/$LOG_FILE"

# Check if the file exists
if [ ! -e "$LOG_PATH" ]; then
  echo "ERROR: Log file '$LOG_FILE' does not exist in /var/log"
  exit 1
fi

# Check if it is readable
if [ ! -r "$LOG_PATH" ]; then
  echo "ERROR: Permission denied for $LOG_PATH"
  exit 1
fi

# Show last 50 lines
tail -n 50 "$LOG_PATH"
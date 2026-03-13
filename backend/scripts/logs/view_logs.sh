#!/bin/bash

LOGFILE=$1

if [ -z "$LOGFILE" ]; then
  echo "ERROR: No log file provided"
  exit 1
fi

tail -n 50 $LOGFILE
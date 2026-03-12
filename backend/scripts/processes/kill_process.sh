#!/bin/bash

PID=$1

if [ -z "$PID" ]; then
  echo "ERROR: No PID provided"
  exit 1
fi

kill $PID

echo "Process $PID terminated"
#!/bin/bash

MEMORY_TOTAL=$(free -m | awk '/Mem:/ {print $2}')
MEMORY_USED=$(free -m | awk '/Mem:/ {print $3}')

MEMORY_USAGE=$((MEMORY_USED * 100 / MEMORY_TOTAL))

echo "MEMORY_USAGE=$MEMORY_USAGE"

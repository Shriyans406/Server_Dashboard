#!/bin/bash

DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')

echo "DISK_USAGE=$DISK_USAGE"

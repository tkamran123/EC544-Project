#!/bin/bash

while :
do

echo "Polling the contract..."

STATE=$(node entryRead.js)

echo "Contract state = " $STATE


if [ "$STATE" = "true" ];
then
 # close the Lock
 echo 0 > /sys/class/gpio/gpio18/value
else
 # open the Lock
 echo 1 > /sys/class/gpio/gpio18/value
fi

# Cycle every 10 seconds
sleep 10
done

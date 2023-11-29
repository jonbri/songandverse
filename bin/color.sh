#!/bin/bash

color=$1
file="src/components/BowlingBall.tsx"

if [ -z "$color" ]; then
  grep "const defaultColor" $file | sed -e "s/const defaultColor = \"\(.*\)\";/\1/"
  exit 0;
fi

sed -i -e "s/const defaultColor = \".*$/const defaultColor = \"${color}\";/" $file


#!/bin/bash

FILES="$1"
OUTPUT="$2"
~/Tools/ffmpeg -f concat -i $FILES -c copy $OUTPUT


#!/bin/bash

INPUT=$1
OUTPUT=$2
FROM_TIME=$3
TO_TIME=$4
~/Tools/ffmpeg -i $INPUT -ss $FROM_TIME -t $TO_TIME $OUTPUT



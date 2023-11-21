#!/bin/bash

git diff --quiet HEAD:./ -- presets || (echo "❗️ Please only modify the 'configs' directory instead of the 'presets' directory." && exit 1)

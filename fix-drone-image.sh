#!/bin/bash

# Create a backup of index.html
cp index.html index.html.bak

# Replace drone_bg1.woCR7TG9.jpg with /emathrix-tech/images/drone_bg.jpg
sed -i '' 's|/emathrix-tech/astro/drone_bg1.woCR7TG9.jpg|/emathrix-tech/images/drone_bg.jpg|g' index.html

# Also fix the srcset attributes that reference drone_bg1
sed -i '' 's|srcset="[^"]*drone_bg1[^"]*"|srcset="/emathrix-tech/images/drone_bg.jpg"|g' index.html

echo "Done fixing drone background image." 
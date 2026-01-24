# Image Optimization Script
# This script would convert images to WebP format for better performance

# For Windows PowerShell, you would need to install a tool like ImageMagick
# Here's a sample of what the optimization commands would look like:

# Convert PNG to WebP (typically 25-80% smaller)
# magick images/logo.png -quality 80 images/logo.webp
# magick images/techniceLogo.png -quality 80 images/techniceLogo.webp
# magick images/projects/faithful-steward.png -quality 80 images/projects/faithful-steward.webp
# magick images/projects/team-hub.png -quality 80 images/projects/team-hub.webp

# Convert JPEG to WebP
# magick images/headshot.jpg -quality 80 images/headshot.webp

# Optimization recommendations:
# - logo.png (420KB) -> WebP could reduce to ~100-200KB
# - techniceLogo.png (925KB) -> WebP could reduce to ~200-400KB  
# - team-hub.png (615KB) -> WebP could reduce to ~150-300KB
# - faithful-steward.png (348KB) -> WebP could reduce to ~80-150KB

Write-Host "Image optimization script ready"
Write-Host "To actually convert images, install ImageMagick and uncomment the commands above"
Write-Host "Current large images that should be optimized:"
Get-ChildItem -Path "images" -Recurse -Include "*.png","*.jpg" | Where-Object { $_.Length -gt 100000 } | Select-Object Name, @{Name="SizeKB";Expression={[math]::Round($_.Length/1024,1)}}
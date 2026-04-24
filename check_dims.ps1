Add-Type -AssemblyName System.Drawing
foreach ($file in Get-ChildItem "public\images\*.jpg") {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        Write-Host "$($file.Name) - $($img.Width)x$($img.Height)"
        $img.Dispose()
    } catch {
        Write-Host "$($file.Name) - Error reading image"
    }
}

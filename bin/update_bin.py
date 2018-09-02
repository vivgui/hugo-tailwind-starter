import urllib.request
import tarfile
import zipfile
import os
import shutil
import sys

print('Updating Hugo binaries')

os.chdir(os.path.dirname(sys.argv[0]))

## Need to set the version number.
version = "0.46"
tarNames = ["macOS","Linux"]
zipNames = ["Windows"]
urlBase = "https://github.com/gohugoio/hugo/releases/download/v{}/".format(version)

for i in range(len(tarNames)):
  tarFilename = "hugo_extended_{}_{}-64bit.tar.gz".format(version,tarNames[i])
  print("Processing: "+tarFilename)
  urllib.request.urlretrieve(urlBase+tarFilename, tarFilename)
  tar = tarfile.open(tarFilename, "r:gz")
  tar.extractall("temp")
  tar.close()
  shutil.copyfile("./temp/hugo", "hugo_extended.{}".format(tarNames[i].lower()))
  shutil.rmtree("temp")
  os.remove(tarFilename)
  i += 1

for i in range(len(zipNames)):
  zipFilename = "hugo_extended_{}_{}-64bit.zip".format(version,zipNames[i])
  print("Processing: "+zipFilename)
  urllib.request.urlretrieve(urlBase+zipFilename, zipFilename)
  with zipfile.ZipFile(zipFilename,"r") as zip_ref:
    zip_ref.extractall("temp")
  shutil.copyfile("./temp/hugo.exe", "hugo_extended-{}.exe".format(zipNames[i].lower()))
  shutil.rmtree("temp")
  os.remove(zipFilename)
  i += 1

print("Hugo has been updated to version {}.".format(version))

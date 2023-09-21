* npm install
* npm install -g eas-cli
* eas login
* eas build:configure
> Edit eas.json
```
{
    ...

      "preview": {
        "distribution": "internal",
        "android": {
          "buildType": "apk"
        }
      },
      ...
}
```

* eas build -p android -e preview
---
sidebar_label: Android APK/AAB Signing
sidebar_position: 5
---

# Android - Sigining APKs and AABs

To publish on the Play Store, you need to give your app a digital signature. Use the following instructions to sign your app.
On Android, there are two signing keys: deployment and upload. The end-users download the .apk signed with the "deployment key". An "upload key" is used to authenticate the .aab / .apk uploaded by developers onto the Play Store and is re-signed with the deployment key once in the Play Store.

- It's highly recommended to use the automatic cloud managed signing for the deployment key. For more information, see the [official Play Store documentation](https://support.google.com/googleplay/android-developer/answer/7384423?hl=en).

## Create an `upload` Keystore

If you have an existing keystore, skip to the next step. If not, create one by either:

- Following the [Android Studio key generation steps](https://developer.android.com/studio/publish/app-signing#sign-apk)
- Running the following at the command line:

  On Mac/Linux, use the following command:

  ```
  keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
  ```

  On Windows, use the following command:

  ```
  keytool -genkey -v -keystore %userprofile%\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload
  ```

  This command stores the `upload-keystore.jks` file in your home directory. If you want to store it elsewhere, change the argument you pass to the `-keystore` parameter. **However, keep the keystore file private; don't check it into public source control!**

:::note

- The `keytool` command might not be in your path—it's part of Java, which is installed as part of Android Studio. You may find it installed in the JDK that is installed with Android Studio, for example:.

  - Linux: `/opt/android-studio/jbr/bin/keytool`
  - macOS: `/Applications/Android Studio.app/Contents/jbr/Contents/Home/bin/keytool`
  - Windows: `C:\\Program Files\\Android\\Android Studio\\jbr\\bin\\keytool.exe`

  Then use that fully qualified path. If your path includes space-separated names, such as Program Files, use platform-appropriate notation for the names. For example, on Mac/Linux use `Program\ Files`, and on Windows use `"Program Files"`.

- The `-storetype JKS` tag is only required for Java 9 or newer. As of the Java 9 release, the keystore type defaults to PKS12.

:::

## Reference the Keystore from the App

Create a file named `[project]/src-tauri/gen/android/key.properties` that contains a reference to your keystore:

```
storePassword=<password from previous step>
keyPassword=<password from previous step>
keyAlias=upload
storeFile=<location of the key store file, such as /Users/<user name>/upload-keystore.jks or C:\\Users\\<user name>\\upload-keystore.jks>
```

:::caution
Keep the `key.properties` file private; don't check it into public source control.
:::

## Configure Signing in Gradle

Configure gradle to use your upload key when building your app in release mode by editing the `[project]/src-tauri/gen/android/app/build.gradle.kts` file.

1. Add the needed imports at the beginning of the file

   ```kotlin
   import java.util.Properties
   import java.io.FileInputStream
   ```

2. Add the keystore information from your properties file before the `android` block:

   ```kotlin {1-3}
   val keyPropertiesFile = rootProject.file("key.properties")
   val keyProperties = Properties()
   keyProperties.load(FileInputStream(keyPropertiesFile))

   android {
      ...
   }
   ```

3. Add the `release` signing config before the `buildTypes` block:

   ```kotlin {1-8}
   signingConfigs {
      create("release") {
          keyAlias = keyProperties["keyAlias"] as String
          keyPassword = keyProperties["keyPassword"] as String
          storeFile = file(keyProperties["storeFile"] as String)
          storePassword = keyProperties["storePassword"] as String
      }
   }

   buildTypes {
      ...
   }
   ```

4. Use the new `release` signing config in the `release` buildTypes

   ```kotlin {5}
   buildTypes {
     ...
     getByName("release") {
       ...
       signingConfig = signingConfigs.getByName("release")
     }
   }
   ```

Release builds of your app will now be signed automatically.

package com.whitelabeldemo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class WhiteLabelConfig extends ReactContextBaseJavaModule {

    @Nonnull
    private final String appName;

    public WhiteLabelConfig(@Nonnull ReactApplicationContext reactContext) {
        super(reactContext);

        this.appName = reactContext
                .getApplicationContext()
                .getResources()
                .getString(R.string.white_label_app_name);
    }


    @Nonnull
    @Override
    public String getName() {
        return "WhiteLabelConfig";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getAppName() {
        return appName;
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getPrimaryColor() {
        return "#008000";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getPrimaryTextColor() {
        return "#FFD700";
    }

    @Nonnull
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getGreetingText() {
        return "Legends of the Hidden Temple Rocks!!!!!";
    }
}
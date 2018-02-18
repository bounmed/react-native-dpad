package com.stellarscript.dpad.focusable;

import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.Spacing;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.yoga.YogaConstants;

final class FocusableViewManager extends ViewGroupManager<FocusableView> {

    private static final String REACT_CLASS = "RCT" + FocusableView.class.getSimpleName();
    private static final String PROP_ACCESSIBLE = "accessible";
    private static final int[] SPACING_TYPES = {
            Spacing.ALL,
            Spacing.LEFT,
            Spacing.RIGHT,
            Spacing.TOP,
            Spacing.BOTTOM,
            Spacing.START,
            Spacing.END,
    };

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected FocusableView createViewInstance(final ThemedReactContext themedReactContext) {
        return new FocusableView(themedReactContext);
    }

    @ReactProp(name = PROP_ACCESSIBLE)
    public void setAccessible(final FocusableView focusableView, final boolean accessible) {
        focusableView.setAccessible(accessible);
    }

    @ReactPropGroup(
            names = {
                    ViewProps.BORDER_WIDTH,
                    ViewProps.BORDER_LEFT_WIDTH,
                    ViewProps.BORDER_RIGHT_WIDTH,
                    ViewProps.BORDER_TOP_WIDTH,
                    ViewProps.BORDER_BOTTOM_WIDTH,
                    ViewProps.BORDER_START_WIDTH,
                    ViewProps.BORDER_END_WIDTH,
            },
            defaultFloat = YogaConstants.UNDEFINED
    )
    public void setBorderWidth(final FocusableView view, final int index, float width) {
        if (!YogaConstants.isUndefined(width) && width < 0) {
            width = YogaConstants.UNDEFINED;
        }

        if (!YogaConstants.isUndefined(width)) {
            width = PixelUtil.toPixelFromDIP(width);
        }

        view.setBorderWidth(SPACING_TYPES[index], width);
    }

    @ReactPropGroup(
            names = {
                    ViewProps.BORDER_COLOR,
                    ViewProps.BORDER_LEFT_COLOR,
                    ViewProps.BORDER_RIGHT_COLOR,
                    ViewProps.BORDER_TOP_COLOR,
                    ViewProps.BORDER_BOTTOM_COLOR,
                    ViewProps.BORDER_START_COLOR,
                    ViewProps.BORDER_END_COLOR
            },
            customType = "Color"
    )
    public void setBorderColor(final FocusableView view, final int index, final Integer color) {
        final float rgbComponent = color == null ? YogaConstants.UNDEFINED : (float) ((int) color & 0x00FFFFFF);
        final float alphaComponent = color == null ? YogaConstants.UNDEFINED : (float) ((int) color >>> 24);
        view.setBorderColor(SPACING_TYPES[index], rgbComponent, alphaComponent);
    }

    @ReactPropGroup(
            names = {
                    ViewProps.BORDER_RADIUS,
                    ViewProps.BORDER_TOP_LEFT_RADIUS,
                    ViewProps.BORDER_TOP_RIGHT_RADIUS,
                    ViewProps.BORDER_BOTTOM_RIGHT_RADIUS,
                    ViewProps.BORDER_BOTTOM_LEFT_RADIUS,
                    ViewProps.BORDER_TOP_START_RADIUS,
                    ViewProps.BORDER_TOP_END_RADIUS,
                    ViewProps.BORDER_BOTTOM_START_RADIUS,
                    ViewProps.BORDER_BOTTOM_END_RADIUS,
            },
            defaultFloat = YogaConstants.UNDEFINED
    )
    public void setBorderRadius(final ReactViewGroup view, final int index, float borderRadius) {
        if (!YogaConstants.isUndefined(borderRadius) && borderRadius < 0) {
            borderRadius = YogaConstants.UNDEFINED;
        }

        if (!YogaConstants.isUndefined(borderRadius)) {
            borderRadius = PixelUtil.toPixelFromDIP(borderRadius);
        }

        if (index == 0) {
            view.setBorderRadius(borderRadius);
        } else {
            view.setBorderRadius(borderRadius, index - 1);
        }
    }

    @ReactProp(name = "borderStyle")
    public void setBorderStyle(final ReactViewGroup view, final String borderStyle) {
        view.setBorderStyle(borderStyle);
    }

}
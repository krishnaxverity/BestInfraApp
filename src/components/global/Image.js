import React from 'react';
import { Image as RNImage, View, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../../constants/colors';

const Image = ({
  // Source props
  source, // For regular images
  icon, // For SVG icons (function component)
  
  // Size props
  width = 24,
  height = 24,
  size, // Alternative to width/height for square images/icons
  
  // Styling props
  variant = 'default', // 'default', 'rounded', 'circle', 'outlined', 'background'
  resizeMode = 'contain',
  style,
  containerStyle,
  
  // Color props
  tintColor,
  fill,
  stroke,
  strokeWidth,
  backgroundColor,
  
  // Interactive props
  onPress,
  disabled = false,
  pressable = false,
  
  // Additional props
  ...props
}) => {
  // Handle size prop for square images/icons
  const finalWidth = size || width;
  const finalHeight = size || height;

  // Determine if it's an SVG icon
  const isSvgIcon = typeof icon === 'function';

  const getContainerStyle = () => {
    const baseStyle = [styles.container, { width: finalWidth, height: finalHeight }];
    
    switch (variant) {
      case 'rounded':
        baseStyle.push(styles.rounded);
        break;
      case 'circle':
        baseStyle.push(styles.circle);
        break;
      case 'outlined':
        baseStyle.push(styles.outlined);
        break;
      case 'background':
        baseStyle.push(styles.background);
        break;
      default:
        break;
    }

    if (backgroundColor) {
      baseStyle.push({ backgroundColor });
    }

    if (disabled) {
      baseStyle.push(styles.disabled);
    }

    return baseStyle;
  };

  const getImageStyle = () => {
    const baseStyle = [styles.image, { width: finalWidth, height: finalHeight }];
    
    if (tintColor) {
      baseStyle.push({ tintColor });
    }

    return baseStyle;
  };

  // Render SVG Icon
  if (isSvgIcon) {
    const IconComponent = icon;
    const iconElement = (
      <View style={[getContainerStyle(), containerStyle]}>
        <IconComponent
          width={finalWidth}
          height={finalHeight}
          fill={fill || tintColor || COLORS.primaryFontColor}
          stroke={stroke}
          strokeWidth={strokeWidth}
          style={[getImageStyle(), style]}
          {...props}
        />
      </View>
    );

    // Wrap with Pressable if onPress is provided
    if (onPress || pressable) {
      return (
        <Pressable onPress={onPress} disabled={disabled} style={styles.pressable}>
          {iconElement}
        </Pressable>
      );
    }

    return iconElement;
  }

  // Render regular image
  const imageElement = (
    <View style={[getContainerStyle(), containerStyle]}>
      <RNImage
        source={source}
        style={[getImageStyle(), style]}
        resizeMode={resizeMode}
        {...props}
      />
    </View>
  );

  // Wrap with Pressable if onPress is provided
  if (onPress || pressable) {
    return (
      <Pressable onPress={onPress} disabled={disabled} style={styles.pressable}>
        {imageElement}
      </Pressable>
    );
  }

  return imageElement;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    // Default image styling
  },
  pressable: {
    // Pressable styling
  },
  // Variant styles
  rounded: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  circle: {
    borderRadius: 999,
    overflow: 'hidden',
  },
  outlined: {
    borderWidth: 1,
    borderColor: COLORS.borderColor || '#e0e0e0',
    borderRadius: 4,
  },
  background: {
    backgroundColor: COLORS.backgroundSecondary || '#f5f5f5',
    borderRadius: 8,
    padding: 8,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Image; 
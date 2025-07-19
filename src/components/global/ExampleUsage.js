import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { Button, Input, Image } from './index';
import { colors } from '../../constants/colors';
import Tick from '../../../assets/icons/tick.svg';
import Plus from '../../../assets/icons/plus.svg';
import Menu from '../../../assets/icons/bars.svg';
import Notification from '../../../assets/icons/notification.svg';
import Hand from '../../../assets/icons/hand.svg';
import BiLogo from '../../../assets/icons/Logo.svg';
import GlobeShield from '../../../assets/icons/globe-shield.svg';
import RechargeIcon from '../../../assets/icons/recharge.svg';
import InvoicesIcon from '../../../assets/icons/invoices.svg';
import TicketsIcon from '../../../assets/icons/tickets.svg';
import UsageIcon from '../../../assets/icons/usage.svg';

const ExampleUsage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', 'Form submitted successfully!');
      console.log('Form data:', formData);
    }, 2000);
  };

  const handleIconPress = (iconName) => {
    Alert.alert('Icon Pressed', `${iconName} icon was pressed!`);
  };

  const handleImagePress = (imageName) => {
    Alert.alert('Image Pressed', `${imageName} image was pressed!`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section with Icons */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Global Components Demo</Text>
        <View style={styles.iconRow}>
          <Image 
            icon={Menu} 
            size={24} 
            fill={colors.color_primary_deep}
            onPress={() => handleIconPress('Menu')}
            style={styles.headerIcon}
          />
          <Image 
            icon={Notification} 
            size={24} 
            fill={colors.color_primary_deep}
            onPress={() => handleIconPress('Notification')}
            style={styles.headerIcon}
          />
        </View>
      </View>

      {/* Color Palette Demo Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Color System Demo</Text>
        <View style={styles.colorGrid}>
          <View style={[styles.colorItem, { backgroundColor: colors.color_primary }]}>
            <Text style={styles.colorLabel}>Primary</Text>
            <Text style={styles.colorCode}>color_primary</Text>
          </View>
          <View style={[styles.colorItem, { backgroundColor: colors.color_secondary }]}>
            <Text style={styles.colorLabel}>Secondary</Text>
            <Text style={styles.colorCode}>color_secondary</Text>
          </View>
          <View style={[styles.colorItem, { backgroundColor: colors.color_positive }]}>
            <Text style={styles.colorLabel}>Positive</Text>
            <Text style={styles.colorCode}>color_positive</Text>
          </View>
          <View style={[styles.colorItem, { backgroundColor: colors.color_warning }]}>
            <Text style={styles.colorLabel}>Warning</Text>
            <Text style={styles.colorCode}>color_warning</Text>
          </View>
          <View style={[styles.colorItem, { backgroundColor: colors.color_danger }]}>
            <Text style={styles.colorLabel}>Danger</Text>
            <Text style={styles.colorCode}>color_danger</Text>
          </View>
          <View style={[styles.colorItem, { backgroundColor: colors.color_neutral }]}>
            <Text style={styles.colorLabel}>Neutral</Text>
            <Text style={styles.colorCode}>color_neutral</Text>
          </View>
        </View>
      </View>

      {/* Image Examples Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Image Component Examples</Text>
        
        {/* Basic Icons */}
        <Text style={styles.subsectionTitle}>Basic Icons</Text>
        <View style={styles.iconGrid}>
          <View style={styles.iconItem}>
            <Image icon={Tick} size={32} fill={colors.color_positive} />
            <Text style={styles.iconLabel}>Success Icon</Text>
          </View>
          <View style={styles.iconItem}>
            <Image icon={Plus} size={32} fill={colors.color_primary} />
            <Text style={styles.iconLabel}>Add Icon</Text>
          </View>
          <View style={styles.iconItem}>
            <Image icon={Hand} size={32} fill={colors.color_secondary} />
            <Text style={styles.iconLabel}>Hand Icon</Text>
          </View>
          <View style={styles.iconItem}>
            <Image 
              icon={Notification} 
              size={32} 
              fill={colors.color_warning}
              onPress={() => handleIconPress('Notification')}
            />
            <Text style={styles.iconLabel}>Clickable Icon</Text>
          </View>
        </View>

        {/* Icon Variants */}
        <Text style={styles.subsectionTitle}>Icon Variants</Text>
        <View style={styles.iconGrid}>
          <View style={styles.iconItem}>
            <Image icon={BiLogo} size={40} variant="default" />
            <Text style={styles.iconLabel}>Default</Text>
          </View>
          <View style={styles.iconItem}>
            <Image icon={GlobeShield} size={40} variant="rounded" backgroundColor={colors.color_primary_lightest} />
            <Text style={styles.iconLabel}>Rounded</Text>
          </View>
          <View style={styles.iconItem}>
            <Image icon={RechargeIcon} size={40} variant="circle" backgroundColor={colors.color_positive_lightest} />
            <Text style={styles.iconLabel}>Circle</Text>
          </View>
          <View style={styles.iconItem}>
            <Image icon={InvoicesIcon} size={40} variant="outlined" />
            <Text style={styles.iconLabel}>Outlined</Text>
          </View>
        </View>

        {/* Different Sizes */}
        <Text style={styles.subsectionTitle}>Different Sizes</Text>
        <View style={styles.sizeGrid}>
          <View style={styles.sizeItem}>
            <Image icon={TicketsIcon} size={16} fill={colors.color_primary} />
            <Text style={styles.sizeLabel}>16px</Text>
          </View>
          <View style={styles.sizeItem}>
            <Image icon={TicketsIcon} size={24} fill={colors.color_primary} />
            <Text style={styles.sizeLabel}>24px</Text>
          </View>
          <View style={styles.sizeItem}>
            <Image icon={TicketsIcon} size={32} fill={colors.color_primary} />
            <Text style={styles.sizeLabel}>32px</Text>
          </View>
          <View style={styles.sizeItem}>
            <Image icon={TicketsIcon} size={48} fill={colors.color_primary} />
            <Text style={styles.sizeLabel}>48px</Text>
          </View>
        </View>

        {/* Interactive Icons */}
        <Text style={styles.subsectionTitle}>Interactive Icons</Text>
        <View style={styles.iconGrid}>
          <View style={styles.iconItem}>
            <Image 
              icon={UsageIcon} 
              size={32} 
              fill={colors.color_primary}
              onPress={() => handleIconPress('Usage')}
              pressable
            />
            <Text style={styles.iconLabel}>Pressable</Text>
          </View>
          <View style={styles.iconItem}>
            <Image 
              icon={Menu} 
              size={32} 
              fill={colors.color_secondary}
              onPress={() => handleIconPress('Menu')}
              pressable
            />
            <Text style={styles.iconLabel}>Menu</Text>
          </View>
          <View style={styles.iconItem}>
            <Image 
              icon={Notification} 
              size={32} 
              fill={colors.color_warning}
              onPress={() => handleIconPress('Notification')}
              pressable
            />
            <Text style={styles.iconLabel}>Notification</Text>
          </View>
          <View style={styles.iconItem}>
            <Image 
              icon={Tick} 
              size={32} 
              fill={colors.color_positive}
              disabled
            />
            <Text style={styles.iconLabel}>Disabled</Text>
          </View>
        </View>
      </View>

      {/* Image Examples Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Image Examples (Using Image Paths)</Text>
        
        {/* Basic Images */}
        <Text style={styles.subsectionTitle}>Basic Images</Text>
        <View style={styles.imageGrid}>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              size={60}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>App Icon</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/splash-icon.png')}
              size={60}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Splash Icon</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/favicon.png')}
              size={60}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Favicon</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/adaptive-icon.png')}
              size={60}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Adaptive Icon</Text>
          </View>
        </View>

        {/* Image Variants */}
        <Text style={styles.subsectionTitle}>Image Variants</Text>
        <View style={styles.imageGrid}>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              size={50}
              variant="default"
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Default</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              size={50}
              variant="rounded"
              backgroundColor={colors.color_primary_lightest}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Rounded</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              size={50}
              variant="circle"
              backgroundColor={colors.color_positive_lightest}
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Circle</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              size={50}
              variant="outlined"
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Outlined</Text>
          </View>
        </View>

        {/* Interactive Images */}
        <Text style={styles.subsectionTitle}>Interactive Images</Text>
        <View style={styles.imageGrid}>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              size={50}
              onPress={() => handleImagePress('App Icon')}
              pressable
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Clickable</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/splash-icon.png')}
              size={50}
              onPress={() => handleImagePress('Splash Icon')}
              pressable
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Splash</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/favicon.png')}
              size={50}
              onPress={() => handleImagePress('Favicon')}
              pressable
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Favicon</Text>
          </View>
          <View style={styles.imageItem}>
            <Image 
              source={require('../../../assets/images/adaptive-icon.png')}
              size={50}
              disabled
              resizeMode="contain"
            />
            <Text style={styles.imageLabel}>Disabled</Text>
          </View>
        </View>

        {/* Different Resize Modes */}
        <Text style={styles.subsectionTitle}>Different Resize Modes</Text>
        <View style={styles.resizeGrid}>
          <View style={styles.resizeItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              width={60}
              height={40}
              resizeMode="contain"
            />
            <Text style={styles.resizeLabel}>Contain</Text>
          </View>
          <View style={styles.resizeItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              width={60}
              height={40}
              resizeMode="cover"
            />
            <Text style={styles.resizeLabel}>Cover</Text>
          </View>
          <View style={styles.resizeItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              width={60}
              height={40}
              resizeMode="stretch"
            />
            <Text style={styles.resizeLabel}>Stretch</Text>
          </View>
          <View style={styles.resizeItem}>
            <Image 
              source={require('../../../assets/images/icon.png')}
              width={60}
              height={40}
              resizeMode="center"
            />
            <Text style={styles.resizeLabel}>Center</Text>
          </View>
        </View>
      </View>

      {/* Input Examples Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Input Component Examples</Text>
        
        <Input
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(value) => handleInputChange('name', value)}
          error={errors.name}
          leftIcon={<Image icon={Tick} size={16} fill={colors.color_positive} />}
          style={styles.input}
        />

        <Input
          label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          keyboardType="email-address"
          autoCapitalize="none"
          error={errors.email}
          variant="outlined"
          style={styles.input}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChangeText={(value) => handleInputChange('password', value)}
          secureTextEntry
          error={errors.password}
          variant="filled"
          style={styles.input}
        />

        <Input
          label="Message"
          placeholder="Enter your message"
          value={formData.message}
          onChangeText={(value) => handleInputChange('message', value)}
          multiline
          numberOfLines={4}
          error={errors.message}
          style={styles.input}
        />

        <Input
          placeholder="Search..."
          value=""
          onChangeText={() => {}}
          leftIcon={<Image icon={Plus} size={16} fill={colors.color_text_secondary} />}
          rightIcon={<Image icon={Tick} size={16} fill={colors.color_text_secondary} />}
          style={styles.input}
        />
      </View>

      {/* Button Examples Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Button Component Examples</Text>
        
        <Button
          title="Primary Button (Large)"
          onPress={handleSubmit}
          variant="primary"
          size="medium"
          loading={loading}
          style={styles.button}
        />

        <Button
          title="Secondary Button"
          onPress={() => Alert.alert('Secondary', 'Secondary button pressed!')}
          variant="secondary"
          size="medium"
          style={styles.button}
        />

        <Button
          title="Outline Button"
          onPress={() => Alert.alert('Outline', 'Outline button pressed!')}
          variant="outline"
          size="medium"
          style={styles.button}
        />

        <Button
          title="Ghost Button"
          onPress={() => Alert.alert('Ghost', 'Ghost button pressed!')}
          variant="ghost"
          size="small"
          style={styles.button}
        />

        <Button
          title="Disabled Button"
          onPress={() => {}}
          variant="primary"
          disabled
          style={styles.button}
        />
      </View>

      {/* Text Color Examples Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Text Color Examples</Text>
        <Text style={styles.textPrimary}>Primary Text Color</Text>
        <Text style={styles.textSecondary}>Secondary Text Color</Text>
        <Text style={styles.textTertiary}>Tertiary Text Color</Text>
        <Text style={styles.textQuaternary}>Quaternary Text Color</Text>
        <Text style={styles.textSubinfo}>Subinfo Text Color</Text>
      </View>

      {/* Form Submission Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Form Submission</Text>
        <Text style={styles.description}>
          Fill in the form above and click the primary button to see form validation and loading states in action.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color_background_secondary,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.color_primary_deep,
    fontFamily: 'Manrope-Bold',
  },
  iconRow: {
    flexDirection: 'row',
  },
  headerIcon: {
    marginLeft: 15,
  },
  section: {
    marginBottom: 30,
    backgroundColor: colors.color_surface,
    padding: 20,
    borderRadius: 12,
    shadowColor: colors.color_text_primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.color_primary_deep,
    marginBottom: 20,
    fontFamily: 'Manrope-Bold',
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.color_text_primary,
    marginBottom: 15,
    marginTop: 20,
    fontFamily: 'Manrope-Bold',
  },
  description: {
    fontSize: 14,
    color: colors.color_text_secondary,
    lineHeight: 20,
    fontFamily: 'Manrope-Regular',
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '48%',
    height: 80,
    marginBottom: 15,
    borderRadius: 8,
    padding: 10,
  },
  colorLabel: {
    color: colors.color_surface,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Manrope-Bold',
  },
  colorCode: {
    color: colors.color_surface,
    fontSize: 10,
    fontFamily: 'Manrope-Regular',
    marginTop: 4,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  iconItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
    padding: 15,
    backgroundColor: colors.color_primary_lightest,
    borderRadius: 8,
  },
  iconLabel: {
    marginTop: 8,
    fontSize: 12,
    color: colors.color_text_secondary,
    textAlign: 'center',
    fontFamily: 'Manrope-Medium',
  },
  sizeGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  sizeItem: {
    alignItems: 'center',
    padding: 10,
  },
  sizeLabel: {
    marginTop: 8,
    fontSize: 12,
    color: colors.color_text_secondary,
    fontFamily: 'Manrope-Medium',
  },
  // Image specific styles
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageItem: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 20,
    padding: 15,
    backgroundColor: colors.color_primary_lightest,
    borderRadius: 8,
  },
  imageLabel: {
    marginTop: 8,
    fontSize: 12,
    color: colors.color_text_secondary,
    textAlign: 'center',
    fontFamily: 'Manrope-Medium',
  },
  resizeGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  resizeItem: {
    alignItems: 'center',
    padding: 10,
  },
  resizeLabel: {
    marginTop: 8,
    fontSize: 12,
    color: colors.color_text_secondary,
    fontFamily: 'Manrope-Medium',
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginBottom: 12,
  },
  buttonText: {
    color: colors.color_surface,
    fontSize: 14,
    fontFamily: 'Manrope-Medium',
    marginLeft: 8,
  },
  // Text color examples
  textPrimary: {
    fontSize: 16,
    color: colors.color_text_primary,
    fontFamily: 'Manrope-Medium',
    marginBottom: 8,
  },
  textSecondary: {
    fontSize: 16,
    color: colors.color_text_secondary,
    fontFamily: 'Manrope-Medium',
    marginBottom: 8,
  },
  textTertiary: {
    fontSize: 16,
    color: colors.color_text_tertiary,
    fontFamily: 'Manrope-Medium',
    marginBottom: 8,
  },
  textQuaternary: {
    fontSize: 16,
    color: colors.color_text_quaternary,
    fontFamily: 'Manrope-Medium',
    marginBottom: 8,
  },
  textSubinfo: {
    fontSize: 16,
    color: colors.color_subinfo,
    fontFamily: 'Manrope-Medium',
    marginBottom: 8,
  },
});

export default ExampleUsage; 
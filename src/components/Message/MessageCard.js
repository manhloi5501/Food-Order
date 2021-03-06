import React from 'react';
import {View, Text} from 'react-native';
import stylesCard from './styles';
import * as Animatable from 'react-native-animatable';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import rootColor from '../../constants/color';

function MessageCard(props) {
  const {message} = props;
  const navigation = useNavigation();
  return (
    <Animatable.View
      animation="bounceInRight"
      duration={1500}
      style={stylesCard.messageCard}>
      <View style={stylesCard.messageCardTitle}>
        <Text style={stylesCard.messageCardTitleText}>{message.name}</Text>
      </View>
      <View style={stylesCard.messageCardContent}>
        <Text numberOfLines={6} style={stylesCard.messageCardContentText}>
          {message.message && message.message + '\n'}
          Trạng thái: {message.status + '\n'}
          Giao đến: {message.address + '\n'}
          Giá tiền đơn hàng: {message.totalMoney}
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.push('Detail Message', {
              message: message,
            })
          }>
          <Text style={stylesCard.messageCardContentTextStrong}>
            Nhấn để xem chi tiết đơn hàng
          </Text>
        </TouchableOpacity>
      </View>
      <View style={stylesCard.messageCardFooter}>
        <Text style={stylesCard.messageCardFooterText}>{message.date}</Text>
        <Text style={stylesCard.messageCardFooterTextSecondary}>
          {message.isRead ? (
            <MaterialIcon
              name="mark-chat-read"
              size={20}
              color={rootColor.orangePrimaryColor}
            />
          ) : (
            <MaterialIcon name="circle" size={20} />
          )}
        </Text>
      </View>
    </Animatable.View>
  );
}

export default MessageCard;

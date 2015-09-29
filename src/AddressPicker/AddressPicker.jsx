'use strict'

//  ==================================================
//  Component: AddressPicker
//
//  Include: AddressList AddressSearch
//
//  Description:  Jsx for AddressPicker
//
//  TODO: [@TongchengQiu] AddressList 更换城市后调用 setCity 设置城市
//          你可以根据 AddressPicker 的 state.address 判断是否已经进行了搜索
//  ==================================================

var AddressPicker = React.createClass({
  getInitialState: function() {
    return {
      city: "北京",
      address: null
    };
  },
  getDefaultProps: function() {
    return {}
  },
  setAddress: function(ad) {
    this.setState({
      address: ad
    });
  },
  setCity: function(ct) {
    this.setState({
      city: ct
    });
  },
  render: function() {
    var addressPickerActiveStyle = this.state.address
      ? this.props.addressPickerActiveStyle
      : {};
    return (
      <div className="address-picker" style={addressPickerActiveStyle}>
        <AddressList localAddress={this.state.city}/>
        <AddressInput city={this.state.city} searchSubmitHandler={this.setAddress}/>
        <AddressMap addressKeyword={this.state.address} city={this.props.city}/>
      </div>
    );
  }
});

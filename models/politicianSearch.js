

displayPolitician(obj) {
    return (
      <View style={{flexDirection: 'row', margin: 10, padding: 10, borderWidth: 0.5}}>
        <View style={{marginRight: 10}}>
          <img style={{width: 150, resizeMode: 'center'}} alt="" src={(obj.photo_url?obj.photo_url:'https://ourvoiceusa.org/wp-content/uploads/2017/12/thinker-400x250.jpg')} />
        </View>
        <View style={{width: 425}}>
          <h2>{obj.name}</h2>
          <h3>{(obj.office?obj.office+', ':'')+obj.divisionName}</h3>
          <View style={{flex: 1}}>
            <Text>
              {this._partyNameFromKey(obj.party)}
            </Text>

            <View style={{flex: 1, marginTop: 7}}>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 5}}>
                  <Text>Phone:</Text>
                </View>
                <View>
                  <Text>{(obj.phone?obj.phone:"N/A")}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{marginRight: 7}}>
                  <Text>Email:</Text>
                </View>
                <View>
                  <Text>{(obj.email?obj.email:"N/A")}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>Mailing Address:</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text>{(obj.address?obj.address:"N/A")}</Text>
              </View>
            </View>

          </View>
          <View style={{flexDirection: 'row'}}>
            {this.linkSM(obj, 'phone', 'phone-square', '#5BC236', 'tel:')}
            {this.linkSM(obj, 'email', 'envelope-square', '#0076ff', 'mailto:')}
            {this.linkSM(obj, 'facebook', 'facebook', '#3b5998', 'https://www.facebook.com/')}
            {this.linkSM(obj, 'twitter', 'twitter', '#0084b4', 'https://twitter.com/')}
            {this.linkSM(obj, 'youtube', 'youtube-play', '#ff0000', 'https://www.youtube.com/channel/')}
            {this.linkSM(obj, 'wikipedia', 'wikipedia-w', '#000000', 'https://en.wikipedia.org/wiki/')}
            {this.linkSM(obj, 'url', 'globe', '#008080', '')}
          </View>
        </View>
        <View>
          <Text style={{margin: 10, marginLeft: 0}}>External Links:</Text>
          {this.displayDataSources(obj.external_links)}
          <Text style={{margin: 10, marginLeft: 0}}>Data Sources for this record:</Text>
          {this.displayDataSources(obj.data_sources)}
        </View>
      </View>
    );
  }
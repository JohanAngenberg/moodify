(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(78)},38:function(e,t,a){},39:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(23),l=a.n(i),o=(a(38),a(2)),r=a(3),c=a(5),u=a(4),h=a(6),d=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={TrackData:{},isLoading:!0},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.setState({TrackData:this.props.track,isLoading:!1})}},{key:"render",value:function(){var e=this.state.TrackData;return s.a.createElement("div",{className:"trackCard"},s.a.createElement("div",null,s.a.createElement("img",{className:"trackCardImg",src:e.image,alt:""})),s.a.createElement("div",null,s.a.createElement("p",{className:"trackNameStyles"},e.songName),s.a.createElement("p",{className:"artistStyles"},e.artist)),s.a.createElement("div",null,s.a.createElement("img",{className:"info-i-img",src:"./Info-i.png",alt:"Detailed track info",onClick:this.props.handleShowModalDetails.bind(this,e.id)})))}}]),t}(s.a.Component)),m=a(17),p=a.n(m),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.track,t=e.songName,a=e.artist,n=e.danceability,i=e.energy,l=e.acousticness,o=e.instrumentalness,r=e.valence,c=e.tempo;return s.a.createElement("div",{style:y,onClick:this.props.handleCloseModalDetails.bind(this)},s.a.createElement("div",{style:f},s.a.createElement("img",{className:"close-button",src:"./close.png",onClick:this.props.handleCloseModalDetails.bind(this),alt:"Close"}),s.a.createElement("p",{className:"trackNameStyles-inmodal"},t),s.a.createElement("p",{className:"artistStyles-inmodal"},a),s.a.createElement("div",{className:"barStyle"},"Dance",s.a.createElement(p.a,{now:Math.round(100*n),label:"".concat(Math.round(100*n),"%")})),s.a.createElement("div",{className:"barStyle"},"Energy ",s.a.createElement(p.a,{now:Math.round(100*i),label:"".concat(Math.round(100*i),"%")})),s.a.createElement("div",{className:"barStyle"},"Acoustic ",s.a.createElement(p.a,{now:Math.round(100*l),label:"".concat(Math.round(100*l),"%")})),s.a.createElement("div",{className:"barStyle"},"Instrumental ",s.a.createElement(p.a,{now:Math.round(100*o),label:"".concat(Math.round(100*o),"%")})),s.a.createElement("div",{className:"barStyle"},"Positivity ",s.a.createElement(p.a,{now:Math.round(100*r),label:"".concat(Math.round(100*r),"%")})),s.a.createElement("div",{className:"barStyle"},"Tempo: ",Math.round(c)," bpm")))}}]),t}(n.Component),y={backgroundColor:"rgb(255, 255, 255, 0.4)",position:"fixed",left:0,top:0,width:"100vw",height:"150vh",zIndex:"10"},f={backgroundColor:"white",border:"1px solid #007d2a",boxShadow:"1px 1px 5px 1px #007d2a",borderRadius:"5px",maxWidth:"300px",margin:"0 auto",position:"relative",top:"15%",padding:"10px"},b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={showModalDetails:!1,selectedTrack:void 0},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleShowModalDetails",value:function(e){this.setState({selectedTrack:this.props.playlist.find(function(t){return t.id===e})}),this.setState({showModalDetails:!0})}},{key:"handleCloseModalDetails",value:function(e){e.target===e.currentTarget&&this.setState({showModalDetails:!1})}},{key:"render",value:function(){var e=this,t=this.props.playlist?this.props.playlist.map(function(t,a){return s.a.createElement(d,{key:t.id,track:t,handleShowModalDetails:e.handleShowModalDetails.bind(e)})}):[];return s.a.createElement("div",{className:"tracks-container"},this.state.showModalDetails&&s.a.createElement(g,{track:this.state.selectedTrack,handleCloseModalDetails:this.handleCloseModalDetails.bind(this)}),t)}}]),t}(n.Component);var v=function(e){return e.includes("?")?(e=e.split("?")[0]).split("/")[6]:e.includes("https://open.spotify.com/playlist/")?e.split("/")[4]:e.includes(":")?e.split(":")[4]:e},E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={search:[],filterInput:"",playlist:[],errorMessIsVisible:!1,inputType:"listInput"},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"getData",value:function(e){var t=this;fetch("https://moodify.sebastianberglonn.se/audio-features/".concat(e)).then(function(e){return e.json()}).then(function(e){if(0!==e.length)return t.setState({errorMessIsVisible:!1}),e;t.setState({errorMessIsVisible:!0})}).then(function(e){t.setState({playlist:e})}).then(function(){return t.props.playlist(t.state.playlist)}),this.state.playlist&&this.props.hideLanding()}},{key:"handleSelectPlaylist",value:function(e){e.target.value&&(this.props.playlistUri(e.target.value),this.getData(e.target.value))}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&(this.props.playlistUri(this.state.filterInput),this.getData(this.state.filterInput))}},{key:"handleRadio",value:function(e){this.setState({inputType:e.target.value})}},{key:"handleInputTextChange",value:function(e){var t=v(e.target.value);this.setState({filterInput:t})}},{key:"handleOnClick",value:function(e){e.target.value="",this.setState({errorMessIsVisible:!1})}},{key:"onToggleModal",value:function(){this.props.toggleModal()}},{key:"reloadPage",value:function(){window.location.reload()}},{key:"render",value:function(){var e=this,t=this.props.userPlaylists.map(function(e){return s.a.createElement("option",{key:e.uri,value:e.uri},e.name)});return s.a.createElement("div",null,window.location.search.replace("?access_token","")&&"undefined"!==window.location.search.replace("?access_token","")?s.a.createElement("div",null,s.a.createElement("img",{className:"question-mark-img",src:"./Info-questionmark.png",onClick:this.onToggleModal.bind(this),alt:"Info"}),s.a.createElement("h1",{onClick:function(){return e.reloadPage()},className:"header ".concat(this.props.showLanding&&"landingStyle")},"Moodify"),s.a.createElement("div",null,[{value:"listInput",displayValue:"Select playlist"},{value:"textInput",displayValue:"Enter playlistlink"}].map(function(t){return s.a.createElement("div",{key:t.value,className:"radioWrapper"},s.a.createElement("input",{type:"radio",value:t.value,checked:e.state.inputType===t.value,onChange:e.handleRadio.bind(e)}),s.a.createElement("label",null,t.displayValue))})),"listInput"===this.state.inputType?s.a.createElement("select",{className:"input-field",onChange:this.handleSelectPlaylist.bind(this)},s.a.createElement("option",{value:""},"Select playlist..."),t):s.a.createElement("input",{ref:"inputUrl",className:"input-field",type:"text",placeholder:"Enter Spotify playlist link...",value:this.state.input,onChange:this.handleInputTextChange.bind(this),onKeyDown:this.handleKeyPress.bind(this),onClick:this.handleOnClick.bind(this)}),s.a.createElement("p",{className:"error-message",style:{visibility:this.state.errorMessIsVisible?"visible":"hidden"}},"Oops, no data could be fetched. Please enter a valid playlist link.")):s.a.createElement("div",null,s.a.createElement("h1",{className:"header ".concat(this.props.showLanding&&"landingStyle")},"Moodify"),s.a.createElement("div",null,s.a.createElement("p",{onClick:function(){return window.location="https://moodify.sebastianberglonn.se/login"},className:"loginButton"},"Login with Spotify ",s.a.createElement("i",{className:"fab fa-spotify"})))))}}]),t}(n.Component),k=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="https://open.spotify.com/embed/playlist/".concat(this.props.playlistUri);return s.a.createElement("div",{className:"web-player"},s.a.createElement("iframe",{title:"Moodify Webplayer",src:e,width:window.innerWidth>=640?"640":"".concat(window.innerWidth),height:"80",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"}))}}]),t}(n.Component),w=a(14),M=a.n(w),C=(a(59),a(8)),N=a.n(C),S=a(16),T=a.n(S),O=a(7),j=a.n(O),P=a(1),I=a.n(P),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={activeButton:""},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"setHappyMode",value:function(){this.setState({activeButton:"superHappy"}),this.props.onPresetClick({danceability:.5,energy:.5,acousticness:.5,instrumentalness:.5,valence:.9,tempo:180,toggleDance:!1,toggleEnergy:!1,toggleAcousticness:!1,toggleInstrumentalness:!1,toggleValence:!0,toggleTempo:!1})}},{key:"setAngerMode",value:function(){this.setState({activeButton:"angerManagement"}),this.props.onPresetClick({danceability:.5,energy:.9,acousticness:.5,instrumentalness:.5,valence:.2,tempo:180,toggleDance:!1,toggleEnergy:!0,toggleAcousticness:!1,toggleInstrumentalness:!1,toggleValence:!0,toggleTempo:!1})}},{key:"setPartyMode",value:function(){this.setState({activeButton:"maximumParty"}),this.props.onPresetClick({danceability:.7,energy:.8,acousticness:.5,instrumentalness:.5,valence:.5,tempo:180,toggleDance:!0,toggleEnergy:!0,toggleAcousticness:!1,toggleInstrumentalness:!1,toggleValence:!1,toggleTempo:!1})}},{key:"setSoftMode",value:function(){this.setState({activeButton:"softCozy"}),this.props.onPresetClick({danceability:.5,energy:.1,acousticness:.5,instrumentalness:.9,valence:.5,tempo:180,toggleDance:!1,toggleEnergy:!0,toggleAcousticness:!1,toggleInstrumentalness:!0,toggleValence:!1,toggleTempo:!1})}},{key:"resetPreset",value:function(){this.setState({activeButton:""}),this.props.onPresetClick({danceability:.5,energy:.5,acousticness:.5,instrumentalness:.5,valence:.5,tempo:180,toggleDance:!1,toggleEnergy:!1,toggleAcousticness:!1,toggleInstrumentalness:!1,toggleValence:!1,toggleTempo:!1})}},{key:"onHappyClick",value:function(){this.setHappyMode()}},{key:"onAngerClick",value:function(){this.setAngerMode()}},{key:"onPartyClick",value:function(){this.setPartyMode()}},{key:"onSoftClick",value:function(){this.setSoftMode()}},{key:"render",value:function(){return s.a.createElement(T.a,{className:"btn-wrapper"},s.a.createElement(j.a,{className:"btn-toolbar"},s.a.createElement(I.a,{className:"btn-col"},s.a.createElement(N.a,{onClick:"superHappy"===this.state.activeButton?this.resetPreset.bind(this):this.setHappyMode.bind(this),variant:"superHappy"===this.state.activeButton?"secondary":"outline-secondary",size:"md"},"Super Happy")),s.a.createElement(I.a,{className:"btn-col"},s.a.createElement(N.a,{onClick:"angerManagement"===this.state.activeButton?this.resetPreset.bind(this):this.setAngerMode.bind(this),variant:"angerManagement"===this.state.activeButton?"secondary":"outline-secondary",size:"md"},"Anger Management")),s.a.createElement(I.a,{className:"btn-col"},s.a.createElement(N.a,{onClick:"maximumParty"===this.state.activeButton?this.resetPreset.bind(this):this.setPartyMode.bind(this),variant:"maximumParty"===this.state.activeButton?"secondary":"outline-secondary",size:"md"},"Maximum Party")),s.a.createElement(I.a,{className:"btn-col"},s.a.createElement(N.a,{onClick:"softCozy"===this.state.activeButton?this.resetPreset.bind(this):this.setSoftMode.bind(this),variant:"softCozy"===this.state.activeButton?"secondary":"outline-secondary",size:"md"},"Soft And Cozy"))))}}]),t}(n.Component),V=a(9),A=(a(77),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).createNotification=function(e){switch(e){case"info":V.NotificationManager.info("Info message");break;case"success":V.NotificationManager.success("Playlist added!","Success!");break;case"warning":V.NotificationManager.warning("Warning message","Close after 3000ms",3e3);break;case"error":V.NotificationManager.error("Error message","Click me!",5e3,function(){alert("callback")});break;default:console.log("info/success/warning/error is NOT entered.")}},a.state={danceability:.5,energy:.5,acousticness:.5,instrumentalness:.5,valence:.5,tempo:180,toggleDance:!1,toggleEnergy:!1,toggleAcousticness:!1,toggleInstrumentalness:!1,toggleValence:!1,toggleTempo:!1,showAdvancedToolbar:!1,showQuickButton:!1,showConfirmationModal:!1},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"onPresetClick",value:function(e){var t=this;this.setState(e,function(){console.log("preset: ",e),t.updateDance(),t.updateEnergy(),t.updateAcousticness(),t.updateInstrumentalness(),t.updateValence(),t.updateTempo()})}},{key:"onToggleToolbar",value:function(){this.setState({showAdvancedToolbar:!this.state.showAdvancedToolbar,showQuickButton:!1}),console.log(this.state.showAdvancedToolbar)}},{key:"onToggleQuickButton",value:function(){this.setState({showQuickButton:!this.state.showQuickButton,showAdvancedToolbar:!1}),console.log(this.state.showQuickButton)}},{key:"updateDance",value:function(){this.state.toggleDance?this.props.danceability(this.state.danceability):this.props.danceability("")}},{key:"updateEnergy",value:function(){this.state.toggleEnergy?this.props.energy(this.state.energy):this.props.energy("")}},{key:"updateAcousticness",value:function(){this.state.toggleAcousticness?this.props.acousticness(this.state.acousticness):this.props.acousticness("")}},{key:"updateInstrumentalness",value:function(){this.state.toggleInstrumentalness?this.props.instrumentalness(this.state.instrumentalness):this.props.instrumentalness("")}},{key:"updateValence",value:function(){this.state.toggleValence?this.props.valence(this.state.valence):this.props.valence("")}},{key:"updateTempo",value:function(){this.state.toggleTempo?this.props.tempo(this.state.tempo):this.props.tempo("")}},{key:"onToggleDance",value:function(){this.state.toggleDance?this.props.danceability(""):this.props.danceability(this.state.danceability),this.setState({toggleDance:!this.state.toggleDance})}},{key:"onToggleEnergy",value:function(){this.state.toggleEnergy?this.props.energy(""):this.props.energy(this.state.energy),this.setState({toggleEnergy:!this.state.toggleEnergy})}},{key:"onToggleAcousticness",value:function(){this.state.toggleAcousticness?this.props.acousticness(""):this.props.acousticness(this.state.acousticness),this.setState({toggleAcousticness:!this.state.toggleAcousticness})}},{key:"onToggleInstrumentalness",value:function(){this.state.toggleInstrumentalness?this.props.instrumentalness(""):this.props.instrumentalness(this.state.instrumentalness),this.setState({toggleInstrumentalness:!this.state.toggleInstrumentalness})}},{key:"onToggleValence",value:function(){this.state.toggleValence?this.props.valence(""):this.props.valence(this.state.valence),this.setState({toggleValence:!this.state.toggleValence})}},{key:"onToggleTempo",value:function(){this.state.toggleTempo?this.props.tempo(""):this.props.tempo(this.state.tempo),this.setState({toggleTempo:!this.state.toggleTempo})}},{key:"buttonClick",value:function(){this.setState({showConfirmationModal:!0})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(T.a,{className:"toolKit"},s.a.createElement(j.a,{className:"toolBar"},s.a.createElement(I.a,{className:"menuButton ".concat(this.state.showQuickButton?"active":null),onClick:this.onToggleQuickButton.bind(this)},"Presets"),s.a.createElement(I.a,{className:"menuButton ".concat(this.state.showAdvancedToolbar?"active":null),onClick:this.onToggleToolbar.bind(this)},"Advanced ",s.a.createElement("i",{className:"fas fa-sliders-h"}))),this.state.showAdvancedToolbar?s.a.createElement(j.a,null,s.a.createElement(I.a,null,s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(I.a,null,s.a.createElement(N.a,{onClick:this.onToggleDance.bind(this),size:"sm",variant:this.state.toggleDance?"secondary":"outline-secondary"},"Dance")),s.a.createElement(I.a,{className:"sliderCol",lg:"8",md:"9",sm:"9"},s.a.createElement(M.a,{disabled:!this.state.toggleDance,step:1,minValue:0,maxValue:10,value:10*this.state.danceability,onChange:function(t){e.setState({danceability:t/10}),e.props.danceability(t/10)}}))),s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(I.a,null,s.a.createElement(N.a,{onClick:this.onToggleEnergy.bind(this),size:"sm",variant:this.state.toggleEnergy?"secondary":"outline-secondary"},"Energy")),s.a.createElement(I.a,{className:"sliderCol",lg:"8",md:"9",sm:"9"},s.a.createElement(M.a,{disabled:!this.state.toggleEnergy,step:1,minValue:0,maxValue:10,value:10*this.state.energy,onChange:function(t){e.setState({energy:t/10}),e.props.energy(t/10)}}))),s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(I.a,null,s.a.createElement(N.a,{onClick:this.onToggleAcousticness.bind(this),size:"sm",variant:this.state.toggleAcousticness?"secondary":"outline-secondary"},"Acoustic")),s.a.createElement(I.a,{className:"sliderCol",lg:"8",md:"9",sm:"9"},s.a.createElement(M.a,{disabled:!this.state.toggleAcousticness,step:1,minValue:0,maxValue:10,value:10*this.state.acousticness,onChange:function(t){e.setState({acousticness:t/10}),e.props.acousticness(t/10)}})))),s.a.createElement(I.a,null,s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(I.a,null,s.a.createElement(N.a,{onClick:this.onToggleInstrumentalness.bind(this),size:"sm",variant:this.state.toggleInstrumentalness?"secondary":"outline-secondary"},"Instrumental")),s.a.createElement(I.a,{className:"sliderCol",lg:"8",md:"9",sm:"9"},s.a.createElement(M.a,{disabled:!this.state.toggleInstrumentalness,step:1,minValue:0,maxValue:10,value:10*this.state.instrumentalness,onChange:function(t){e.setState({instrumentalness:t/10}),e.props.instrumentalness(t/10)}}))),s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(I.a,null,s.a.createElement(N.a,{onClick:this.onToggleValence.bind(this),size:"sm",variant:this.state.toggleValence?"secondary":"outline-secondary"},"Positivity")),s.a.createElement(I.a,{className:"sliderCol",lg:"8",md:"9",sm:"9"},s.a.createElement(M.a,{disabled:!this.state.toggleValence,step:1,minValue:0,maxValue:10,value:10*this.state.valence,onChange:function(t){e.setState({valence:t/10}),e.props.valence(t/10)}}))),s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(I.a,null,s.a.createElement(N.a,{onClick:this.onToggleTempo.bind(this),size:"sm",variant:this.state.toggleTempo?"secondary":"outline-secondary"},"Tempo")),s.a.createElement(I.a,{className:"sliderCol",lg:"8",md:"9",sm:"9"},s.a.createElement(M.a,{disabled:!this.state.toggleTempo,step:10,minValue:60,maxValue:300,value:this.state.tempo,onChange:function(t){e.setState({tempo:t}),e.props.tempo(t)}}))))):null,this.state.showQuickButton?s.a.createElement(j.a,null,s.a.createElement(I.a,null,s.a.createElement(j.a,{className:"toolRow"},s.a.createElement(D,{onPresetClick:this.onPresetClick.bind(this)})))):null,s.a.createElement(j.a,null,s.a.createElement(I.a,{onClick:this.props.toggleConfirmationModal,className:"playButton"}," Create Spotify playlist ",s.a.createElement("i",{className:"fab fa-spotify"})))),s.a.createElement(V.NotificationContainer,null))}}]),t}(s.a.Component)),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={isShowing:!1},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e={transform:this.props.displayModal?"translateY(0vh)":"translateY(-100vh)"},t={opacity:this.props.displayModal?"1":"0",transform:this.props.displayModal?"translateY(0vh)":"translateY(-100vh)"};return s.a.createElement("div",null,s.a.createElement("div",{style:t,className:"backDrop",onClick:this.props.toggleModal.bind(this,!1)},"\xa0"),s.a.createElement("div",{style:e,className:"modalWrapper"},s.a.createElement("div",{className:"modalHeader"},s.a.createElement("h3",{className:"modalHeaderH3"},"Help!")),s.a.createElement("div",{className:"modalBody"},s.a.createElement("h4",null,"How I work, you ask?"),s.a.createElement("p",{className:"infoTextModal"},s.a.createElement("br",null),"1. You can either select an existing playlist from our dropdown menu OR enter a Spotify playlist link of your own choice.",s.a.createElement("br",null),"2. When you have chosen your playlist two alternatives will appear; Presets and Advanced. You can either choose one of our already done Presets OR use our toolkit to filter out the songs you want.",s.a.createElement("br",null)),s.a.createElement("h4",null,"But what does it MEAN?"),s.a.createElement("p",{className:"infoTextModal"},s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold"}}," Dance ")," describes how suitable a track is for dancing.",s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold"}}," Energy ")," represents a preceptual measure of intensity and activity.",s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold"}}," Acoustic ")," measures whether a track is acoustic.",s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold"}}," Instrumental ")," predicts whether a track contains no vocals.",s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold"}}," Positivity ")," describes the musical positiveness conveyed by a track.",s.a.createElement("br",null),s.a.createElement("span",{style:{fontWeight:"bold"}}," Tempo ")," shows the overall tempo of a track in beats per minute (BPM).",s.a.createElement("br",null))),s.a.createElement("div",{className:"modalFooter"},s.a.createElement("button",{className:"btnCancel",onClick:this.props.toggleModal.bind(this,!1)},"CLOSE"))))}}]),t}(s.a.Component);function x(e){return e<=1?e+.1:e+10}function W(e){return e<=1?e-.1:e-10}var H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={playlistName:""},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"handleInputTextChange",value:function(e){var t=e.target.value;this.setState({playlistName:t})}},{key:"handleSubmitplaylist",value:function(){this.props.createPlaylist(this.state.playlistName),this.props.toggleModal(!1)}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSubmitplaylist()}},{key:"render",value:function(){var e={transform:this.props.displayModal?"translateY(0vh)":"translateY(-100vh)"},t={opacity:this.props.displayModal?"1":"0",transform:this.props.displayModal?"translateY(0vh)":"translateY(-100vh)"};return s.a.createElement("div",null,s.a.createElement("div",{style:t,className:"backDrop",onClick:this.props.toggleModal.bind(this,!1)},"\xa0"),s.a.createElement("div",{style:e,className:"confirmationModalWrapper"},s.a.createElement("div",{className:"confirmationModalHeader"},s.a.createElement("h3",{className:"confirmationModalHeaderH3"},"Create Playlist")),s.a.createElement("div",{className:"confirmationModalBody"},s.a.createElement("h5",null,"Enter playlist name"),s.a.createElement("input",{className:"confirmationModal-input",type:"text",onKeyPress:this.handleKeyPress.bind(this),onChange:this.handleInputTextChange.bind(this)})),s.a.createElement("div",{className:"confirmationModalFooter"},s.a.createElement("button",{className:"btnCancel",onClick:this.handleSubmitplaylist.bind(this)},"Submit"))))}}]),t}(s.a.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).createNotification=function(e){switch(e){case"info":V.NotificationManager.info("Info message");break;case"success":V.NotificationManager.success("Playlist added!","Success!");break;case"warning":V.NotificationManager.warning("Warning message","Close after 3000ms",3e3);break;case"error":V.NotificationManager.error("Error message","Click me!",5e3,function(){alert("callback")});break;default:console.log("info/success/warning/error is NOT entered.")}},a.state={playlistUri:"",danceability:"",energy:"",acousticness:"",instrumentalness:"",valence:"",tempo:"",playlist:"",showModal:!1,showConfirmationModal:!1,showLanding:!0,user:{},filteredPlaylist:[],userPlaylists:[]},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=window.location.search.replace("?access_token","");t&&"undefined"!==t&&(fetch("https://moodify.sebastianberglonn.se/user-data/".concat(t)).then(function(e){return e.json()}).then(function(t){e.setState({user:t})}),fetch("https://moodify.sebastianberglonn.se/user-playlists/".concat(t)).then(function(e){return e.json()}).then(function(t){return e.setState({userPlaylists:t.items.map(function(e){return{name:e.name,uri:e.id}})})}))}},{key:"updateDanceability",value:function(e){this.setState({danceability:e})}},{key:"updatePlaylistUri",value:function(e){this.setState({playlistUri:e})}},{key:"updatePlaylist",value:function(e){var t=e;this.setState({playlist:t})}},{key:"updateEnergy",value:function(e){this.setState({energy:e})}},{key:"updateAcousticness",value:function(e){this.setState({acousticness:e})}},{key:"updateInstrumentalness",value:function(e){this.setState({instrumentalness:e})}},{key:"updateValence",value:function(e){this.setState({valence:e})}},{key:"updateTempo",value:function(e){this.setState({tempo:e})}},{key:"toggleModal",value:function(){this.setState({showModal:!this.state.showModal})}},{key:"toggleConfirmationModal",value:function(){this.setState({showConfirmationModal:!this.state.showConfirmationModal})}},{key:"hideLanding",value:function(){this.setState({showLanding:!1})}},{key:"createPlaylist",value:function(e,t){var a=this,n=window.location.search.replace("?access_token",""),s=t;fetch("https://moodify.sebastianberglonn.se/create-playlist/".concat(this.state.user.id,"/").concat(s,"/").concat(n),{method:"POST"}).then(function(e){return e.json()}).then(function(t){var s=t.id;return fetch("https://moodify.sebastianberglonn.se/add-tracks/".concat(s,"/").concat(e,"/").concat(n),{method:"POST"}).then(function(e){return e.json()}).then(function(){return a.setState({playlistUri:s})}).then(function(){return a.createNotification("success")})})}},{key:"render",value:function(){var e=this,t=this.state.playlist?this.state.playlist.filter(function(t){return""===e.state.danceability?t:t.danceability>=W(e.state.danceability)&&t.danceability<=x(e.state.danceability)}).filter(function(t){return""===e.state.energy?t:t.energy>=W(e.state.energy)&&t.energy<=x(e.state.energy)}).filter(function(t){return""===e.state.acousticness?t:t.acousticness>=W(e.state.acousticness)&&t.acousticness<=x(e.state.acousticness)}).filter(function(t){return""===e.state.instrumentalness?t:t.instrumentalness>=W(e.state.instrumentalness)&&t.instrumentalness<=x(e.state.instrumentalness)}).filter(function(t){return""===e.state.valence?t:t.valence>=W(e.state.valence)&&t.valence<=x(e.state.valence)}).filter(function(t){return""===e.state.tempo?t:t.tempo>=W(e.state.tempo)&&t.tempo<=x(e.state.tempo)}):[];return s.a.createElement("div",null,s.a.createElement("div",{className:"header-container ".concat(this.state.showLanding?"landing":null)},s.a.createElement(E,{playlistUri:this.updatePlaylistUri.bind(this),playlist:this.updatePlaylist.bind(this),toggleModal:this.toggleModal.bind(this),hideLanding:this.hideLanding.bind(this),showLanding:this.state.showLanding,userPlaylists:this.state.userPlaylists})),s.a.createElement(B,{displayModal:this.state.showModal,toggleModal:this.toggleModal.bind(this)}),s.a.createElement(H,{displayModal:this.state.showConfirmationModal,toggleModal:this.toggleConfirmationModal.bind(this),createPlaylist:this.createPlaylist.bind(this,t.map(function(e){return e.uri}))}),this.state.showLanding?null:s.a.createElement(T.a,{className:"main-container"},s.a.createElement(I.a,{md:"auto"},s.a.createElement(j.a,null,s.a.createElement(I.a,null,s.a.createElement("p",{className:"filteredMessage",style:{visibility:0===t.length?"hidden":"visible"}},"You have ",t.length," tracks in your list."))),s.a.createElement(j.a,null,s.a.createElement(I.a,{md:"12"},s.a.createElement(A,{toggleModal:this.toggleModal.bind(this),danceability:this.updateDanceability.bind(this),energy:this.updateEnergy.bind(this),acousticness:this.updateAcousticness.bind(this),instrumentalness:this.updateInstrumentalness.bind(this),valence:this.updateValence.bind(this),tempo:this.updateTempo.bind(this),userId:this.state.user.id,playlist:this.state.playlist,toggleConfirmationModal:this.toggleConfirmationModal.bind(this)}))),s.a.createElement(j.a,null,s.a.createElement(I.a,{md:"12",sm:"12",xs:"12"},s.a.createElement(b,{filterValues:this.state,playlist:t}))))),s.a.createElement(V.NotificationContainer,null),s.a.createElement("div",{className:"web-player-container"},this.state.playlist?s.a.createElement(k,{playlistUri:this.state.playlistUri}):null))}}]),t}(s.a.Component),z=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(L,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.d9dc734f.chunk.js.map
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';




//class SingleContact extends React.Component {

class Contact extends React.Component {

    render() {
      var iconSRC;
      if (this.props.children.gender=='male'){
        iconSRC ="https://png.icons8.com/male/color/50/000000";
      }
      if (this.props.children.gender=='female'){
        iconSRC ="https://png.icons8.com/female/color/50/000000";
      }

      let highLightClass ="pull-left col-md-3 col-lg-3 contact-ctr " +this.props.children.requiresHighLight;


        return (
            <section className={highLightClass}>
                <img src={this.props.children.picture.medium} className="img-rounded" alt={this.props.children.name.first}>
                </img>
                <img src={iconSRC} className="img-rounded pull-right" alt={this.props.children.gender}>
                </img>
                <div className='contact-details col-md-12 col-lg-12'>
                    <label className='row pull-left col-md-12 col-lg-12'>first
                        Name: {this.props.children.name.first}</label>
                    <label className='row pull-left col-md-12 col-lg-12'>last
                        Name: {this.props.children.name.last}</label>
                    <label className='row pull-left col-md-12 col-lg-12'>Email: {this.props.children.email}</label>

                </div>
            </section>
        )
    }
}

class contactsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {contacts: [], filter:'',highlight:'', contactsPerPage:9};
    }

    componentDidMount() {
        this.getContactsList(this.state.contactsPerPage);  //by default we load 9 contacts each time
    }

//  gets a single contact and renders it inside the list.
//  logicalexamination if item should be highlighted
    eachContact = (item, i) => {
      let highlight = this.state.highlight;
      let requiresHighLight;

      if(highlight==''){
        item.requiresHighLight='';
      } else if(item.name.first.includes(highlight)||item.name.last.includes(highlight)){
        item.requiresHighLight='highlight';
      } else{
        item.requiresHighLight='';
      }

        return (
            <div key={i} index={i} id={item._id} className={requiresHighLight}>
                <Contact >
                    {item}
                </Contact>
            </div>
        )
    }

// go to randomuser API to get several random users according to state ammount of contacts in a page, updates this.state.contacts accordingly
// reusable since it ADDS new users to existing contacts
    getContactsList = () => {
        let ammount = this.state.contactsPerPage;

        axios.get('https://randomuser.me/api/?results='+ammount)
            .then((response) => {
              let updatedContactsList = this.state.contacts;
                for(let i=0;i<ammount;i++){
                  updatedContactsList.push(response.data.results[i]);
                }
                this.setState({contacts: updatedContactsList});
            })
            .catch((error) => {
                console.log(error);
            });
    };

//  each change of filter input fires event. this function handles it by updating the state accordingly
    updateFilter = (event) =>{
      this.setState({filter:event.target.value})
    }

    //  each change of highlight input fires event. this function handles it by updating the state accordingly
        updateHighLight = (event) =>{
          this.setState({highlight:event.target.value})
        }


//  seperate function to handle click event on load more button. adds more contacts to state.
    loadMoreContacts = () => {
      this.getContactsList();
    }

    render() {
        // filter definitions, used first or last name as basis.
        let filteredContactArray = this.state.contacts
        .filter(contact => this.state.filter === '' || contact.name.first.includes(this.state.filter)||contact.name.last.includes(this.state.filter));

        return (
            <main>
                <label className='row well pull-left col-md-12 col-lg-12 sticky-top'>
                  <span>Filter:</span>
                  <input type='text' name='filter' placeholder='Search' onChange={this.updateFilter.bind(this)}/>
                  <span> HighLight: </span>
                  <input type='text' name='HighLight' placeholder='HighLight' onChange={this.updateHighLight.bind(this)}/>
                </label>
                <div className="contacts-list row">
                        {filteredContactArray.map(this.eachContact)}
                </div>

              <button className='btn btn-primary center-block' onClick={this.loadMoreContacts}> Load more </button>
            </main>
        )
    }
    ;
}

export default contactsList;

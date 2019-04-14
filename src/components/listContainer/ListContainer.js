import React, { Component } from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import photo from "../../assets/no_pic.jpg";

const SortableItem = sortableElement(({name, company}) => 
            <li style={{listStyle: "none"}}>
                <div className="PersonContainer">
                        <div className="personal_data">
                            <p>{ name }</p>
                            <p className="company">{ company }</p>
                        </div>
                        <img src={ photo } alt="lady" className="profile_pic"/>
                    </div>
            </li>
        );

const SortableContainer = sortableContainer(({children}) => {
  return <ul >{children}</ul>;
});

class ListContainer extends Component {

    state = {
        people:""
      }
    
      componentDidMount() {
    
            fetch("https://rodolfocompany-860a35.pipedrive.com/v1/persons?api_token=479f2bc15058867bb7dcfdaade60fe25d27c55f4")
            .then(response => response.json())
            .then( data => {
            this.setState({
            people: data.data
            }) 
            console.log(data.data)
        } )
    
      }
    
      onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({people}) => ({
          people: arrayMove(people, oldIndex, newIndex),
        }));
      };

      render() {

        const {people} = this.state;

        return(
            <SortableContainer onSortEnd={this.onSortEnd}>
                {people ? (
                    people.map((person, index) => (
                <SortableItem key={`person-${index}`} index={index} name={person.name} company={ person.org_name } />
                ))
                ) :(
                    ""
                ) }
            </SortableContainer>
        )
      }
    
}

export default ListContainer;
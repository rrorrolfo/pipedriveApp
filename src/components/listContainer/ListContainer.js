import React from "react";
import "./listContainer.css";
import PersonContainer from "./personContainer/PersonContainer";
import {sortableContainer, sortableElement} from 'react-sortable-hoc';
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

const ListContainer = ({ people, sortList }) => {

        return(
            <SortableContainer onSortEnd={ sortList }>
                {people ? (
                    people.map((person, index) => (
                <SortableItem key={ person.id } index={index} name={person.name} company={ person.org_name } />
                ))
                ) :(
                    ""
                ) }
            </SortableContainer>
        )
    
}

export default ListContainer;
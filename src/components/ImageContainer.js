import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;


const ImageContainer = () => {

    props.items.map(function(image) {



    return (
  <div>
    <h1>Uploaded Images</h1>
   </div>


    )

}

<div>
<% items.forEach(function(image) { %>
<div>
    <div>
        <img src="data:image/<%=image.img.contentType%>;base64,
             <%=image.img.data.toString('base64')%>">
        <div>
            <h5><%= image.name %></h5>
              


<p><%= image.desc %></p>



        </div>
    </div>
</div>
<% }) %>
</div>

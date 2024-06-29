
import React from 'react';
import './Adoption.css';
import Header from '../Components/AppBar';
import { useNavigate } from 'react-router-dom';
// Extended sample data for the dogs
const dogs = [
    {
        name: "Buddy",
        age: "3 years",
        breed: "Labrador Retriever",
        image: "dog1.jpg",
        imageUrl: "https://plus.unsplash.com/premium_photo-1683134036144-82b0a3d50f11?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGFicmFkb3IlMjBSZXRyaWV2ZXJ8ZW58MHx8MHx8fDA%3D" // Example URL, replace with actual URL
    },
    {
        name: "Max",
        age: "2 years",
        breed: "German Shepherd",
        image: "dog2.jpg",
        imageUrl: "https://images.unsplash.com/photo-1513350660342-816d92510adf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEdlcm1hbiUyMFNoZXBoZXJkfGVufDB8fDB8fHww" // Example URL, replace with actual URL
    },
    {
        name: "Bella",
        age: "4 years",
        breed: "Golden Retriever",
        image: "dog3.jpg",
        imageUrl: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29sZGVuJTIwUmV0cmlldmVyfGVufDB8fDB8fHww" // Example URL, replace with actual URL
    },
    // Add imageUrl for other dogs similarly
    {
        name: "Charlie",
        age: "1 year",
        breed: "Bulldog",
        image: "dog4.jpg",
        imageUrl: "https://images.unsplash.com/photo-1510621785963-8c1744b6a8c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fEJ1bGxkb2d8ZW58MHx8MHx8fDA%3D" // Example URL, replace with actual URL
    },
    {
        name: "Lucy",
        age: "5 years",
        breed: "Beagle",
        image: "dog5.jpg",
        imageUrl: "https://plus.unsplash.com/premium_photo-1681883371525-0a035fc15f25?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxCZWFnbGV8ZW58MHx8MHx8fDA%3D" // Example URL, replace with actual URL
    },
    {
        name: "Rocky",
        age: "6 months",
        breed: "Poodle",
        image: "dog6.jpg",
        imageUrl: "https://images.unsplash.com/photo-1546447147-3fc2b8181a74?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFBvb2RsZXxlbnwwfHwwfHx8MA%3D%3D" // Example URL, replace with actual URL
    },
    {
        name: "Daisy",
        age: "3 years",
        breed: "Rottweiler",
        image: "dog7.jpg",
        imageUrl: "https://images.unsplash.com/photo-1598819849325-f0152d605b08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Um90dHdlaWxlcnxlbnwwfHwwfHx8MA%3D%3D" // Example URL, replace with actual URL
    },
    {
        name: "Molly",
        age: "2 years",
        breed: "Yorkshire Terrier",
        image: "dog8.jpg",
        imageUrl: "https://images.unsplash.com/photo-1610389712622-73f621ff06bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFlvcmtzaGlyZSUyMFRlcnJpZXJ8ZW58MHx8MHx8fDA%3D" // Example URL, replace with actual URL
    },
    {
        name: "Jack",
        age: "4 years",
        breed: "Boxer",
        image: "dog9.jpg",
        imageUrl: "https://images.unsplash.com/photo-1623453593355-fba710ca96c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fEJveGVyJTIwZG9nfGVufDB8fDB8fHww" // Example URL, replace with actual URL
    },
    {
        name: "Luna",
        age: "1 year",
        breed: "Siberian Husky",
        image: "dog10.jpg",
        imageUrl: "https://images.unsplash.com/photo-1566903026052-36e4e1bd803a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fFNpYmVyaWFuJTIwSHVza3l8ZW58MHx8MHx8fDA%3D" // Example URL, replace with actual URL
    },
    {
        name: "Buddy Jr.",
        age: "1 year",
        breed: "Cocker Spaniel",
        image: "dog11.jpg",
        imageUrl: "https://media.istockphoto.com/id/1419845909/photo/english-cocker-spaniel-on-a-bench.jpg?s=612x612&w=0&k=20&c=ilcriJd63BerpSA0gP-pl3kclFzJTF7yE2V6BXVe9wk="
    },
    {
        name: "Ruby",
        age: "2 years",
        breed: "Dalmatian",
        image: "dog12.jpg",
        imageUrl: "https://media.istockphoto.com/id/1214475764/photo/dalmatian.jpg?s=612x612&w=0&k=20&c=SLgGsXTdhJPkPNwqz-qYCitTO7YZ5yDqzCd7iZhCL5k="
    }
];

const AdoptionCards = () => {
    const navigate = useNavigate();
  
    const handleAdoptClick = () => {
      navigate('/signin');
     };
  
    return (
      <div className='adoptbackground'>
        <Header/>
        <div className='adopt'>
          <h1>Adopt Me!!</h1>
          <div className="card-container">
            {dogs.map((dog, index) => (
              <div className="card" key={index}>
                <img src={dog.imageUrl} alt={dog.name} />
                <h2>{dog.name}</h2>
                <p>Age: {dog.age}</p>
                <p>Breed: {dog.breed}</p>
                <button className="adopt-btn" onClick={handleAdoptClick}>Adopt</button>
                <button className="download-btn" onClick={() => alert(`Downloading details for ${dog.name}`)}>Download</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default AdoptionCards;

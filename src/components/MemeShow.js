import { useLocation, Link } from 'react-router-dom';

const MemeShow = () => {
  const location = useLocation();

  const meme = location.state;
  console.log(meme);

  if (meme === null) {
    return <p>Loading...</p>;
  }
  return (
    <section className="section">
      <div className="container">
        <h2 className="title has-text-centered">{meme.name}</h2>
        <hr />
        <div className="columns">
          <div className="column-is-half">
            <figure className="image">
              <img src={meme.url} alt={meme.name} />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

// useEffect(() => {
//   getSingleMeme(id)
//     .then((res) => console.log(res.data))
//     .catch((err) => console.error(err));
// }, [id]);

// console.log(meme);

// if (meme === null) {
//   return <p>Loading...</p>;
// }

//   return (
//     <section className="section">
//       <p>just testinng</p>
//       <div className="container">
//         <h2 className="title has-text-centered">{meme.name}</h2>
//         <hr />
//         <div className="columns">
//           <div className="column-is-half">
//             <figure className="image">
//               <img src={meme.url} alt={meme.name} />
//             </figure>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

export default MemeShow;

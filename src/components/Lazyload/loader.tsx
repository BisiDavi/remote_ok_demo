import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width="100%"    
    className="container m-auto d-flex px-0"
    viewBox="0 0 300 150"
    backgroundColor="lightgray"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0"  width="400px" height="30px" />     
  </ContentLoader>
)


export default function Loaders(){
  const array = new Array(20);

  return (
    <>
    <div className="loading">
      {array.fill(20).map((_,index) => (
        <div key={index} className="loader">
          <Loader />
        </div>
      ))}
    </div>
    <style jsx>
      {`
        .loading:{
          display:flex;
          flex-direction:column;
        }
        .loader{
          height:100px;
          margin:20px 0px;
        }
      `}
    </style>
    </>
  )
}

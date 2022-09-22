import React from 'react';
import { connect } from 'react-redux';
import GalleryItem from '../components/GalleryItem';
import SidebarItem from '../components/SidebarItem';

import { getBreeds } from '../store/actions';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getBreeds();
  }

  render() {
    //show the console log to all components to understand how many times each component is rerendering
    console.log('rerender');
    return this.props.isLoading ? (
      <h1>Loading</h1>
    ) : (
      <div className='wrapper'>
        <div className='sidebar'>
          {this.props.breeds.length > 0 &&
            this.props.breeds.map((item) => {
              return <SidebarItem key={item.breedName} {...item} />;
            })}
        </div>
        <div className='gallery'>
          {
            //reduce function needs to modify data for gallery and show only subBreeds(in my data a subBreeds it is a count of the dogs for each breed)
            //filter to gallery needs for show grid with 5 columns and 20 rows, will be good add the pagination for this
            this.props.breeds.length > 0 &&
              this.props.breeds
                .reduce((previousValue, currentValue, index) => [...previousValue, ...currentValue.subBreeds.map((subBreed) => ({ ...subBreed, breedIndex: index }))], [])
                .filter((item, index) => index < 100)
                .map((item) => {
                  return <GalleryItem key={`${item.breedName}_${item.mainBreedName}`} {...item} />;
                })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  breeds: state.fetchBreeds.data,
  isLoading: state.fetchBreeds.loading,
});
const mapDispatchToProps = (dispatch) => ({ getBreeds: () => dispatch(getBreeds()) });

export default connect(mapStateToProps, mapDispatchToProps)(Main);

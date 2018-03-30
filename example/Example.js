import React from 'react';
import {hot} from 'react-hot-loader';
import Sticky from '../src/Sticky';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      offset: 0,
      offsetSecond: 0,

    };
  }

  render() {
    return (
      <div className="container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan massa sit amet augue mollis, at finibus magna luctus. Nunc ultricies tincidunt urna vel
          finibus. Cras a nibh et est laoreet euismod ut et risus. Sed maximus nec lacus vel feugiat. Nulla interdum libero in orci tempus tempus. Praesent nec ultricies massa,
          quis aliquet dui. Etiam porttitor, nunc id maximus fermentum, felis leo condimentum lorem, eget pulvinar nulla lectus vel arcu. In in orci ac nisi dapibus facilisis
          nec
          et dolor. In pulvinar eros ac odio sagittis maximus. Cras pulvinar, sem et cursus commodo, sem velit auctor arcu, vel viverra lectus erat et felis. Sed faucibus
          aliquam
          varius. Ut at commodo urna. Ut in vehicula metus. Vestibulum pulvinar vel nisi a pellentesque. Suspendisse ullamcorper massa tincidunt turpis commodo aliquet.
          Phasellus a
          elementum leo.
        </p>

        <Row>
          <Col xs={12}>
            <Sticky subscribe={(props) => (this.setState({offset: props.height}))} addClassName={'small'}>
              <div>
                <h1>
                  Sticky example
                </h1>
              </div>
            </Sticky>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan massa sit amet augue mollis, at finibus magna luctus. Nunc ultricies tincidunt urna vel
              finibus. Cras a nibh et est laoreet euismod ut et risus. Sed maximus nec lacus vel feugiat. Nulla interdum libero in orci tempus tempus. Praesent nec ultricies massa,
              quis aliquet dui. Etiam porttitor, nunc id maximus fermentum, felis leo condimentum lorem, eget pulvinar nulla lectus vel arcu. In in orci ac nisi dapibus facilisis
              nec
              et dolor. In pulvinar eros ac odio sagittis maximus. Cras pulvinar, sem et cursus commodo, sem velit auctor arcu, vel viverra lectus erat et felis. Sed faucibus
              aliquam
              varius. Ut at commodo urna. Ut in vehicula metus. Vestibulum pulvinar vel nisi a pellentesque. Suspendisse ullamcorper massa tincidunt turpis commodo aliquet.
              Phasellus a
              elementum leo.
            </p>
            <Sticky offset={this.state.offset}  subscribe={(props) => (this.setState({offsetSecond: props.height + this.state.offset}))}>
              <h2 style={{backgroundColor: 'silver', padding: 0, margin: 0}}>
                Another sticky {this.state.offset}
              </h2>
            </Sticky>
            <p>
              Morbi interdum viverra mauris, ac laoreet est semper a. Proin ipsum dolor, cursus a nisi id, tempor laoreet libero. Cras tempus, diam ut mollis auctor, lectus felis
              imperdiet urna, non pellentesque tortor mi at purus. Nulla consequat rutrum metus, a pulvinar leo scelerisque ac. Phasellus quis urna pulvinar, iaculis leo eu, dictum
              nunc. Curabitur et placerat sapien. Curabitur consectetur nibh elementum nulla hendrerit, a sodales quam ornare. Sed sit amet est diam. Morbi efficitur leo id ornare
              mattis. Donec tincidunt, ante eget condimentum lacinia, est felis elementum ex, sed tristique felis ligula ut sapien. Praesent consequat justo nisi, vitae placerat
              lorem
              consequat nec. Suspendisse in porta dolor.
            </p>
            <p>
              Aliquam lacus enim, laoreet id lacinia convallis, vulputate sed eros. Nunc vitae fringilla ligula. Donec vel velit non justo congue dapibus. Curabitur egestas lorem
              turpis, in finibus nulla fermentum ac. Morbi finibus rhoncus congue. Nullam ex quam, iaculis porttitor porttitor eget, dictum lacinia magna. Nam nec euismod sem. Sed
              et
              est at urna laoreet fringilla. Pellentesque imperdiet mollis nunc maximus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur urna
              tortor,
              consequat in ipsum a, laoreet accumsan enim. Vivamus sed pellentesque nisi. Mauris maximus condimentum nisl vitae malesuada.
            </p>
            <p>
              Etiam quis metus est. Nullam pharetra fringilla massa, et tincidunt ligula. Mauris aliquam arcu quis nunc venenatis ornare. Integer sapien orci, porttitor vitae
              fringilla
              id, varius eu felis. Sed quis auctor eros, eu egestas ligula. Aliquam porta dolor libero, sit amet ullamcorper ligula tristique id. Mauris sit amet nulla arcu. Nullam
              suscipit vestibulum nisl a ullamcorper. Cras vel lorem sed quam viverra tempus. Quisque varius nulla quis leo luctus finibus. Aliquam varius in urna id pharetra.
              Aliquam
              vitae ex massa. Suspendisse finibus rhoncus tellus vitae condimentum.
            </p>
            <p>
              In hac habitasse platea dictumst. Ut consectetur sapien erat, at viverra urna viverra in. Pellentesque finibus volutpat dolor. Suspendisse nibh nulla, rhoncus ac
              sapien
              sed, pellentesque placerat urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ac laoreet ipsum, eget gravida
              velit.
              Cras at euismod purus, nec finibus felis. Curabitur sollicitudin nisl quis elementum faucibus. Donec eget purus turpis. Maecenas justo metus, aliquam ac commodo in,
              semper eu quam. Proin risus nisi, volutpat vel venenatis porttitor, molestie id urna. Integer lacinia pharetra velit id euismod. Sed venenatis, justo sit amet
              volutpat
              lobortis, quam nunc congue lorem, euismod lobortis elit libero quis tortor. Vivamus pulvinar mollis tempor. Morbi ac consequat ex. Duis tristique nulla in interdum
              imperdiet.
            </p>
            <Sticky offset={this.state.offsetSecond}>
              <h2 style={{backgroundColor: 'green', padding: 0, margin: 0}}>
                Another sticky {this.state.offsetSecond}
              </h2>
            </Sticky>

            <p>
              Morbi interdum viverra mauris, ac laoreet est semper a. Proin ipsum dolor, cursus a nisi id, tempor laoreet libero. Cras tempus, diam ut mollis auctor, lectus felis
              imperdiet urna, non pellentesque tortor mi at purus. Nulla consequat rutrum metus, a pulvinar leo scelerisque ac. Phasellus quis urna pulvinar, iaculis leo eu, dictum
              nunc. Curabitur et placerat sapien. Curabitur consectetur nibh elementum nulla hendrerit, a sodales quam ornare. Sed sit amet est diam. Morbi efficitur leo id ornare
              mattis. Donec tincidunt, ante eget condimentum lacinia, est felis elementum ex, sed tristique felis ligula ut sapien. Praesent consequat justo nisi, vitae placerat
              lorem
              consequat nec. Suspendisse in porta dolor.
            </p>
            <p>
              Aliquam lacus enim, laoreet id lacinia convallis, vulputate sed eros. Nunc vitae fringilla ligula. Donec vel velit non justo congue dapibus. Curabitur egestas lorem
              turpis, in finibus nulla fermentum ac. Morbi finibus rhoncus congue. Nullam ex quam, iaculis porttitor porttitor eget, dictum lacinia magna. Nam nec euismod sem. Sed
              et
              est at urna laoreet fringilla. Pellentesque imperdiet mollis nunc maximus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur urna
              tortor,
              consequat in ipsum a, laoreet accumsan enim. Vivamus sed pellentesque nisi. Mauris maximus condimentum nisl vitae malesuada.
            </p>
            <p>
              Etiam quis metus est. Nullam pharetra fringilla massa, et tincidunt ligula. Mauris aliquam arcu quis nunc venenatis ornare. Integer sapien orci, porttitor vitae
              fringilla
              id, varius eu felis. Sed quis auctor eros, eu egestas ligula. Aliquam porta dolor libero, sit amet ullamcorper ligula tristique id. Mauris sit amet nulla arcu. Nullam
              suscipit vestibulum nisl a ullamcorper. Cras vel lorem sed quam viverra tempus. Quisque varius nulla quis leo luctus finibus. Aliquam varius in urna id pharetra.
              Aliquam
              vitae ex massa. Suspendisse finibus rhoncus tellus vitae condimentum.
            </p>
            <p>
              In hac habitasse platea dictumst. Ut consectetur sapien erat, at viverra urna viverra in. Pellentesque finibus volutpat dolor. Suspendisse nibh nulla, rhoncus ac
              sapien
              sed, pellentesque placerat urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum ac laoreet ipsum, eget gravida
              velit.
              Cras at euismod purus, nec finibus felis. Curabitur sollicitudin nisl quis elementum faucibus. Donec eget purus turpis. Maecenas justo metus, aliquam ac commodo in,
              semper eu quam. Proin risus nisi, volutpat vel venenatis porttitor, molestie id urna. Integer lacinia pharetra velit id euismod. Sed venenatis, justo sit amet
              volutpat
              lobortis, quam nunc congue lorem, euismod lobortis elit libero quis tortor. Vivamus pulvinar mollis tempor. Morbi ac consequat ex. Duis tristique nulla in interdum
              imperdiet.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

      </div>
    );
  }
}

Example.propTypes = {};
Example.defaultProps = {};

export default hot(module)(Example);

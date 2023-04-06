import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Lock(props) {
  return (
    <Svg
      width={props.width}
      height={props.height}
      viewBox="0 0 102.725 129.5"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M96.451 112.745c-17.96 0-32.571-15.521-32.571-34.601 0-19.078 14.611-34.6 32.571-34.6 17.961 0 32.572 15.522 32.572 34.6 0 19.08-14.611 34.601-32.572 34.601zm0-60.458c-13.139 0-23.829 11.599-23.829 25.857s10.69 25.858 23.829 25.858c13.14 0 23.83-11.6 23.83-25.858 0-14.258-10.69-25.857-23.83-25.857z"
        fill="#9fc7fb"
        transform="translate(-45.089 -43.544)"
      />
      <Path
        d="M127.296 173.044H65.607c-11.327-.012-20.506-9.191-20.518-20.518v-60.51c.008-7.755 6.292-14.039 14.047-14.048h74.631c7.754.009 14.039 6.293 14.047 14.048v60.51c-.012 11.327-9.191 20.506-20.518 20.518z"
        fill="#3787ff"
        transform="translate(-45.089 -43.544)"
      />
      <Path
        d="M108.473 112.392c.007-9.253-10.007-15.045-18.024-10.424-8.018 4.621-8.027 16.188-.016 20.821.182.106.367.206.554.302v18.808h10.929v-18.808a12.016 12.016 0 006.557-10.699z"
        fill="#fff"
        transform="translate(-45.089 -43.544)"
      />
    </Svg>
  );
}

export default Lock;

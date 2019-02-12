import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export const KeyButton = withStyles({
  root: {
    width: 160,
    height: 30,
    marginBottom: 2
  }
})(Button);

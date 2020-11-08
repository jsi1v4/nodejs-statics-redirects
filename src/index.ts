import app from './app';
import { IS_DEV } from './constants';

const port = IS_DEV ? 3000 : (process.env.PORT || 8080);

app.listen(port, () => console.log(`Server is listening on ${port}`));

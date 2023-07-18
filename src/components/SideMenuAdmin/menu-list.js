import ShoppingBag from '@mui/icons-material/ShoppingBag';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import paths from '../../constants/paths';

const listLinks = [
    {
        id:1,
        label:'Pedidos',
        link: paths.Order,
        icon: ShoppingBag

    },
    {
        id:2,
        label:'Listar Produtos',
        link: paths.Products,
        icon: FormatListBulletedIcon

    }

]

export default listLinks
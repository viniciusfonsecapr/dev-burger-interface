import ShoppingBag from '@mui/icons-material/ShoppingBag';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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

    },
    {
        id:3,
        label:'Novo Produto',
        link: paths.NewProduct,
        icon: AddCircleIcon

    }

]

export default listLinks
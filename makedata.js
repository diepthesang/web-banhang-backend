const db = require("./src/db/models")
const { getAllProductByName } = require("./src/services/user.services")


let makedata = () => {
    db.Product.bulkCreate(
        [
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
            {
                cateId: 1,
                name: 'Iphone 11 Promax 128gb',
                price: 10000000,
                img: 'https://www.xtmobile.vn/vnt_upload/product/01_2022/thumbs/600_600_iphone_12_mau_tim_purple_64gb_xtmobile.jpg',
                intro: 'iPhone 11 128GB VNA có thể gọi là một trong những lựa chọn smartphone rất tốt ở thời điểm hiện tại. Thế hệ iPhone 11 mang tới những gì mà người dùng cần nhất trên một chiếc smartphone.',
                description: 'iPhone 11 128GB VNA được trang bị màn hình Liquid Retina - tấm nền LCD được cho là tốt nhất trên smartphone hiện tại. Viền màn hình tuy không được mỏng như màn hình OLED nhưng thiết kế của máy vẫn tạo ra một cảm giác cao cấp. Kích thước 6.1inch vừa tay nhưng đồng thời cũng đủ cho người dùng có đủ thông gian sử dụng thoải mái.',
                color: 'red',
                amount: 10,
                delete: true
            },
        ]
    )

}


let makeCate = () => {
    db.Category.bulkCreate(
        [
            {
                name: 'Apple',
                imgLogo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202207141646'
            },
            {
                name: 'SamSung',
                imgLogo: 'https://images.samsung.com/is/image/samsung/assets/hk_en/about-us/brand/logo/mo/360_197_1.png?$FB_TYPE_B_PNG$'
            },
            {
                name: 'Nokia',
                imgLogo: 'https://www.nokia.com/sites/default/files/styles/scale_720_no_crop/public/2022-03/NOKIA_LOGO_WHITE_HR.jpg'
            },
            {
                name: 'Motorola',
                imgLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Motorola_M_symbol_blue.svg/2048px-Motorola_M_symbol_blue.svg.png'
            },
            {
                name: 'Xiaomi',
                imgLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png'
            },

        ]
    )
}


getAllProductByName('11').then(data => console.log(data)).catch(err => console.log(err))

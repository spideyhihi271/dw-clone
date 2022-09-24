import React from 'react';
import './style.css';

const FooterIntroduction = () => {
    const handelReadmore = () => {
        let btn = document.querySelector('.footerIntro__read-btn');
        let container = document.querySelector('.footerIntro__para');
        container.classList.toggle('active');
        if(container.classList[1] === 'active'){
            btn.innerHTML = `THU GỌN <i class="fa-thin fa-angle-up"></i>`;
        }else{
            btn.innerHTML = `ĐỌC THÊM <i class="fa-thin fa-angle-down"></i>`;
        }
        
    }
    return (
        <div className='footerIntro'>
            <p className='footerIntro__title'>ĐỒNG HỒ VÀ TRANG SỨC DANIEL WELLINGTON</p>
            <p className='footerIntro__sub'>Hãy khám phá các sản phẩm đồng hồ nữ và đồng hồ nam để tìm cho mình một chiếc đồng hồ thật hoàn hảo. </p>
            <p className='footerIntro__para'>
                <p>Daniel Wellington có nhiều sẩn phẩm đa dạng, đáp ứng nhu cầu của mọi đối tượng, từ đồng hồ nữ, đồng hồ nam đến đồng hồ nhỏ, đồng hồ tự động, automatic watches, đồng hồ vàng, đồng hồ bạc  hoặc đồng hồ vàng hồng. Bất kể sở thích và nhu cầu của bạn là gì, chúng tôi đều có sản phẩm đồng hồ khiến bạn hài lòng, từ các loại đồng hồ cổ điển, kiểu cách, làm bằng thép đến đồng hồ dây da hoặc đồng hồ vuông. Tất cả các mẫu đồng hồ này đều đa dạng cả về màu sắc lẫn kiểu dáng.</p>
                <p>Một chiếc đồng hồ thời trang với thiết kế độc đáo trên cổ tay sẽ giúp bạn thu hút mọi ánh nhìn. Ngày nay, một chiếc đồng hồ đeo tay không đơn thuần là để xem giờ nữa. Đồng hồ đeo tay là phụ kiện thể hiện phong cách và tạo điển nhấn cho trang phục của bạn. Ngày nay, đồng hồ đeo tay là một phụ kiện thời trang làm hài hòa và tôn lên vẻ ngoài tổng thể của bạn. Một chiếc đồng hồ thanh lịch và không bao giờ lỗi thời là một khoản đầu tư đáng cân nhắc cho cả nam giới và nữ giới. Bạn có thể mang một chiếc đồng hồ kiểu cổ điển để làm toát lên nét thời thượng hoặc nét thanh lịch nơi công sở. Còn nếu bạn muốn tạo phong cách giản dị thì có thể chọn cho mình một chiếc đồng hồ bạc hoặc đồng hồ vàng với các màu sắc mặt số khác nhau.</p>
                <p>Bạn có thể mua đồng hồ Daniel Wellington trực tuyến và tại cửa hàng. Có vô vàn mẫu đồng hồ thời trang đeo tay để tô điểm cho phong cách của bạn. Chúng tôi còn có nhiều mẫu dây đeo đồng hồ với chất liệu đa dạng bằng da, thép, vải mesh và sợi vải NATO fabric.  Các sản phẩm đồng hồ của chúng tôi rất đa dạng từ đồng hồ đeo tay đồng hồ gốm, đồng hồ tự động và đồng hồ thông minh. Sản phẩm đồng hồ của Daniel Wellington có đủ kích cỡ cho cả nam và nữ với thiết kế mặt số phong phú và độc đáo. Bất kể bạn thích phong cách đồng hồ nào, chúng tôi cũng có thể làm hài lòng bạn với các sản phẩm tại website và cửa hàng!</p>
                <p>Đồng hồ thời trang nam và nữ là phụ kiện mang tính thực dụng, trang nhã và giúp hoàn thiện vẻ ngoài của bạn. Trước đây, đồng hồ độc quyền phần nhiều tượng trưng cho địa vị xã hội và không thể phủ nhận đồng hồ cũng là một phụ kiện đại diện cho người đeo. Daniel Wellington có nhiều mẫu phụ kiện có thể dùng để phối với nhau. Trang sức như vòng tay và nhẫn làm bằng chất liệu bạc hoặc vàng hoàn toàn phù hợp để phối cùng đồng hồ của chúng tôi, những chiếc đồng hồ thực dụng và không bao giờ bị lỗi thời. Vì không bị lỗi thời nên các sản phẩm đồng hồ cho nam và nữ của chúng tôi luôn đảm bảo tính thời thượng. Những chiếc đồng hồ thời trang với thiết kế cổ điển cũng rất phù hợp với phong cách thường ngày.</p>
                <p>Dây đeo đồng hồ bằng da, vải bạt hoặc thép màu bạc và màu vàng phù hợp cho mọi dịp. Đồng hồ màu trắng hoặc màu đen nguyên bản sẽ làm tôn lên vẻ ngoài của bạn, giúp bạn phong cách và mạnh mẽ hơn. Ngoài ra, những chiếc đồng hồ được trang trí và kín đáo hơn sẽ rất phù hợp cho những dịp tiệc tùng, những dịp quan trọng hoặc khi bạn muốn mình thật nổi bật với trang phục của mình. Bất kể phong cách cá nhân bạn theo đuổi là gì thì một chiếc đồng hồ nữ hoặc đồng hồ nam hợp thời trang sẽ luôn tạo ấn tượng cá tính và lôi cuốn đặc biệt khi bạn kết hợp đồng hồ với các phụ kiện khác như trang sức. Những chiếc đồng hồ Daniel Wellington của chúng tôi luôn được lựa chọn cẩn thận với thiết kế độc đáo cả về kiểu dáng và chức năng. Hãy khám phá trên trang web hoặc tại cửa hàng gần đó của chúng tôi để tìm cho mình một chiếc đồng hồ yêu thích.</p>
            </p>
            <button className='footerIntro__read-btn' onClick={handelReadmore}>ĐỌC THÊM <i class="fa-thin fa-angle-down"></i> </button>
        </div>
    );
};

export default FooterIntroduction;
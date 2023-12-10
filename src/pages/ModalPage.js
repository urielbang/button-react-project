import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>here is a important agreemant for you to accept</p>
    </Modal>
  );
  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante
        risus, tincidunt nec felis a, pellentesque hendrerit eros. Vestibulum
        mollis, enim lacinia volutpat scelerisque, libero ex consequat diam, eu
        ullamcorper mauris elit ut ex. Morbi imperdiet, erat quis lobortis
        malesuada, neque eros malesuada ex, vitae iaculis sem mauris in eros. In
        sed pulvinar nisi. Suspendisse ac mattis purus, id eleifend diam.
        Vestibulum ac sodales augue, a pretium elit. Sed sagittis finibus
        pretium.
      </p>
    </div>
  );
}
export default ModalPage;

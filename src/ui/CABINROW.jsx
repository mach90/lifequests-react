/* ████████████████████████████████████████████████████████████████████████████████████████████████████
IMPORTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
/* //////////////////////////////////////////////////
DEPENDENCIES
////////////////////////////////////////////////// */
// import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
/* //////////////////////////////////////////////////
HOOKS
////////////////////////////////////////////////// */
import { useCreateCabin } from "./useCreateCabin";
import { useDeleteCabin } from "./useDeleteCabin";
/* //////////////////////////////////////////////////
STYLES
////////////////////////////////////////////////// */
import styled from "styled-components";
/* //////////////////////////////////////////////////
UTILS
////////////////////////////////////////////////// */
import { formatCurrency } from "../../utils/helpers";
/* //////////////////////////////////////////////////
SERVICES
////////////////////////////////////////////////// */
// import { deleteCabin } from "../../services/apiCabins";
/* //////////////////////////////////////////////////
COMPONENTS
////////////////////////////////////////////////// */
import CreateCabinForm from "./CreateCabinForm";

/* //////////////////////////////////////////////////
UI COMPONENTS
////////////////////////////////////////////////// */
import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
/* //////////////////////////////////////////////////
REACT-ICONS
////////////////////////////////////////////////// */
import { HiPencil, HiSquare2Stack } from "react-icons/hi2";
import { HiTrash } from "react-icons/hi";

/* ████████████████████████████████████████████████████████████████████████████████████████████████████
STYLED COMPONENTS
████████████████████████████████████████████████████████████████████████████████████████████████████ */
// const TableRow = styled.div`
//   display: grid;
//   grid-template-columns: 0.6fr 1fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;
//   padding: 1.4rem 2.4rem;

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }
// `;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const Action = styled.button`
  background-color: var(--color-red-100);
  color: var(--color-red-700);
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  &:hover {
    background-color: var(--color-red-700);
    color: var(--color-red-100);
  }
`
/* ████████████████████████████████████████████████████████████████████████████████████████████████████
CABIN ROW COMPONENT
████████████████████████████████████████████████████████████████████████████████████████████████████ */
function CabinRow({ cabin }) {
  // const [showForm, setShowForm] = useState(false);

  /* Destructuring cabin */
  const {id: cabinId, image, name, maxCapacity, regularPrice, discount, description} = cabin;

  // /* //////////////////////////////////////////////////
  // useMutation to mutate (delete) a cabin
  // mutationFn will call the deleteCabin function

  // onSuccess will invalidate the cache to allow immediate
  // automatic refetch and show changes in the UI

  // onError receives the error thrown
  // ////////////////////////////////////////////////// */
  // const queryClient = useQueryClient();

  // const { isLoading: isDeleting, mutate } = useMutation({
  //   mutationFn: id => deleteCabin(id),
  //   onSuccess: () => {
  //     toast.success("Successfully deleted cabin");
  //     queryClient.invalidateQueries({
  //       queryKey: ["cabins"],
  //     });
  //   },
  //   onError: err => toast.error(err.message),
  // });

  const { isCreating, createCabin } = useCreateCabin();
  const { isDeleting, deleteCabin } = useDeleteCabin();

  /* //////////////////////////////////////////////////
  DUPLICATING AN EXISTING CABIN
  ////////////////////////////////////////////////// */
  function handleDuplicate() {
    createCabin({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      description,
      image,
    })
  }

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <>
      <Table.Row>
        <Img src={image} alt={`Image of Cabin ${name}`}></Img>
        <Cabin>{`Cabin ${name}`}</Cabin>
        <div>{`Up to ${maxCapacity} guests`}</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{discount ? formatCurrency(discount) : ""}</Discount>
        <div>
          <Modal>
            <Menus.Menu>
              
              <Menus.Toggle id={cabinId} />

              <Menus.List id={cabinId}>
                <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>Duplicate</Menus.Button>
                <Modal.Open opens="edit"><Menus.Button icon={<HiPencil />}>Edit</Menus.Button></Modal.Open>
                <Modal.Open opens="delete"><Menus.Button icon={<HiTrash />}>Delete</Menus.Button></Modal.Open>
              </Menus.List>

              <Modal.Window name="edit">
                <CreateCabinForm cabinToEdit={cabin} />
              </Modal.Window>

              <Modal.Window name="delete">
                <ConfirmDelete resourceName="cabin" onConfirm={() => deleteCabin(cabinId)} disabled={isDeleting}/>
              </Modal.Window>

            </Menus.Menu>
          </Modal>
        </div>
      </Table.Row>
      {/* {showForm && <CreateCabinForm cabinToEdit={cabin} />} */}
    </>
  );
};

export default CabinRow;
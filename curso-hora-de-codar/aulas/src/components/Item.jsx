import React from "react";
import PropTypes from "prop-types";

export default function Item({ marca, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {ano_lancamento}
      </li>
    </>
  );
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number.isRequired,
};

// Item.defaultProps = {
//   ano_lancamento: 0,
// };

import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote, showFormattedDate } from '../utils/local-data';
import parser from 'html-react-parser';

// 1. Ini Wrapper Component untuk mengambil { id } dari URL
function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

// 2. Ini Class Component utamanya
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Mengambil 1 catatan spesifik berdasarkan id
      note: getNote(props.id)
    };
  }

  render() {
    // Handling jika id catatan tidak ditemukan
    if (!this.state.note) {
      return <p>Catatan tidak ditemukan!</p>;
    }

    // Destructuring agar penulisan lebih rapi
    const { title, createdAt, body } = this.state.note;

    return (
      <section className="detail-page">
        <h2 className="detail-page__title">{title}</h2>
        <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
        <div className="detail-page__body">{parser(body)}</div>
      </section>
    );
  }
}

export default DetailPageWrapper;
import './TimelineItem.css';

function TimelineItem({ date, title, role, description }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <span className="timeline-date">{date}</span>
      <h3>{title}</h3>
      <p className="timeline-role">{role}</p>
      <p>{description}</p>
    </div>
  );
}

export default TimelineItem;

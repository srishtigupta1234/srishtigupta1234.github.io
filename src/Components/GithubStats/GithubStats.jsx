import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "./GitHubStats.css";

const GITHUB_USERNAME = "srishtigupta1234";

const GitHubStats = () => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setRepos(data);
      } catch (err) {
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRepos();
  }, []);

  return (
    <section className="github-section">
      <h2 className="section-title">GITHUB<span>  CALENDAR</span></h2>

      {/* Contribution Calendar */}
      <div className="github-calendar">
        <GitHubCalendar
          username={GITHUB_USERNAME}
          blockSize={15}
          blockMargin={5}
          fontSize={14}
          theme={{
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>
    </section>
  );
};

export default GitHubStats;

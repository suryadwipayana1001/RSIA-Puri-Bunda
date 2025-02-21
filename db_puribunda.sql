-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2025 at 03:10 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_puribunda`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jabatan`
--

CREATE TABLE `jabatan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jabatan`
--

INSERT INTO `jabatan` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(1, 'Manager', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(2, 'Supervisor', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(3, 'Staff', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(4, 'Admin', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(5, 'Operator', '2025-02-20 18:09:21', '2025-02-20 18:09:21');

-- --------------------------------------------------------

--
-- Table structure for table `karyawan`
--

CREATE TABLE `karyawan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `unit_id` bigint(20) UNSIGNED NOT NULL,
  `tanggal_bergabung` date NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `karyawan`
--

INSERT INTO `karyawan` (`id`, `nama`, `username`, `password`, `unit_id`, `tanggal_bergabung`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Gail Hessel', 'ike60', '$2y$12$/C4IEI49t1I7kRFtlvXDuOBM22F7Pi/aY9JgQ8Jk4l./Lg3aPHZgy', 2, '2002-01-18', NULL, '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(2, 'Nadia Kiehn', 'myrl.oreilly', '$2y$12$dUVctgUYOOwJ6xm6edYfVuQiV5MObKPaXPAD8g6QncvNwRHKpI6oO', 1, '2016-06-12', NULL, '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(3, 'Brigitte Schaden', 'qlowe', '$2y$12$59xsT2p.T3ZRbJ8F4Xa6me2GcwKNSYGjP9x6Z8Uruq7pCvKAT5HZq', 4, '2022-08-30', NULL, '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(4, 'Prof. Malachi Herman', 'uhartmann', '$2y$12$oPK6dwtOep.QDyygzZZrX.65aWafy.mRyYMqbavBosSDZCtDpu3H6', 2, '2008-04-05', NULL, '2025-02-20 18:09:22', '2025-02-20 18:09:22'),
(5, 'Ruth Doyle', 'vgrimes', '$2y$12$MkNmN9QVhz1LfexQflTo3eprT71KvzyuztFxHKv5FLKrd56LNBdme', 4, '2005-07-15', NULL, '2025-02-20 18:09:22', '2025-02-20 18:09:22'),
(6, 'Trudie Bayer', 'eldon.damore', '$2y$12$UT7IrKMwVExxgcf3zlels.ZDk4cB6eUFf0d76Y7mx3D8nyen6FWtS', 1, '2022-12-11', NULL, '2025-02-20 18:09:22', '2025-02-20 18:09:22'),
(7, 'Stephan Fisher', 'kenna.shanahan', '$2y$12$90V6UwEFzHsMPcLqb7tREug9cY4iCAltltiW1BztW8sD8DYfAt.HC', 2, '1997-04-22', NULL, '2025-02-20 18:09:23', '2025-02-20 18:09:23'),
(8, 'Angelita Conn', 'lucio.mraz', '$2y$12$gt/zvZ1QA3/0B9i3oNsiZuwI/w.kt0v8N8q7WXRpTO0cjPraWdtAK', 4, '1971-12-27', NULL, '2025-02-20 18:09:23', '2025-02-20 18:09:23'),
(9, 'Eusebio Wisozk', 'jacobson.griffin', '$2y$12$mjZucOX5QFYn.lEHjbITTOXo.Pf.3xADrVCiAtsnRTkKj7L.u71Cm', 5, '1986-02-24', NULL, '2025-02-20 18:09:23', '2025-02-20 18:09:23'),
(10, 'Cindy Wisozk IV', 'bella.halvorson', '$2y$12$w4C8EnYhc/AAlFSsiB4tSudr2gRCuLvtb4pnkDHaK2HXVs8yYmtiu', 3, '2019-06-12', NULL, '2025-02-20 18:09:23', '2025-02-20 18:09:23');

-- --------------------------------------------------------

--
-- Table structure for table `karyawan_jabatan`
--

CREATE TABLE `karyawan_jabatan` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `karyawan_id` bigint(20) UNSIGNED NOT NULL,
  `jabatan_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `karyawan_jabatan`
--

INSERT INTO `karyawan_jabatan` (`id`, `karyawan_id`, `jabatan_id`, `created_at`, `updated_at`) VALUES
(1, 2, 3, NULL, NULL),
(2, 2, 5, NULL, NULL),
(3, 6, 5, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 4, 1, NULL, NULL),
(7, 4, 3, NULL, NULL),
(8, 7, 1, NULL, NULL),
(9, 7, 4, NULL, NULL),
(10, 7, 2, NULL, NULL),
(11, 10, 4, NULL, NULL),
(12, 10, 1, NULL, NULL),
(13, 10, 5, NULL, NULL),
(14, 3, 3, NULL, NULL),
(15, 3, 5, NULL, NULL),
(16, 3, 1, NULL, NULL),
(17, 5, 4, NULL, NULL),
(18, 5, 1, NULL, NULL),
(19, 8, 1, NULL, NULL),
(20, 9, 2, NULL, NULL),
(21, 9, 3, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `karyawan_id` bigint(20) UNSIGNED NOT NULL,
  `tanggal_login` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `karyawan_id`, `tanggal_login`, `created_at`, `updated_at`) VALUES
(1, 10, '2025-02-19', NULL, NULL),
(2, 10, '2025-02-20', NULL, NULL),
(3, 7, '2025-02-20', NULL, NULL),
(4, 6, '2025-02-19', NULL, NULL),
(5, 8, '2025-02-19', NULL, NULL),
(6, 1, '2025-02-20', NULL, NULL),
(7, 8, '2025-02-19', NULL, NULL),
(8, 7, '2025-02-19', NULL, NULL),
(9, 1, '2025-02-19', NULL, NULL),
(10, 7, '2025-02-19', NULL, NULL),
(11, 7, '2025-02-19', NULL, NULL),
(12, 3, '2025-02-19', NULL, NULL),
(13, 2, '2025-02-20', NULL, NULL),
(14, 1, '2025-02-20', NULL, NULL),
(15, 5, '2025-02-20', NULL, NULL),
(16, 9, '2025-02-19', NULL, NULL),
(17, 10, '2025-02-19', NULL, NULL),
(18, 6, '2025-02-20', NULL, NULL),
(19, 1, '2025-02-20', NULL, NULL),
(20, 4, '2025-02-19', NULL, NULL),
(21, 6, '2025-02-20', NULL, NULL),
(22, 7, '2025-02-19', NULL, NULL),
(23, 6, '2025-02-20', NULL, NULL),
(24, 3, '2025-02-20', NULL, NULL),
(25, 6, '2025-02-19', NULL, NULL),
(26, 6, '2025-02-19', NULL, NULL),
(27, 7, '2025-02-20', NULL, NULL),
(28, 9, '2025-02-20', NULL, NULL),
(29, 9, '2025-02-19', NULL, NULL),
(30, 3, '2025-02-19', NULL, NULL),
(31, 6, '2025-02-19', NULL, NULL),
(32, 3, '2025-02-20', NULL, NULL),
(33, 10, '2025-02-20', NULL, NULL),
(34, 9, '2025-02-20', NULL, NULL),
(35, 7, '2025-02-20', NULL, NULL),
(36, 7, '2025-02-20', NULL, NULL),
(37, 6, '2025-02-19', NULL, NULL),
(38, 8, '2025-02-19', NULL, NULL),
(39, 6, '2025-02-19', NULL, NULL),
(40, 2, '2025-02-20', NULL, NULL),
(41, 10, '2025-02-20', NULL, NULL),
(42, 7, '2025-02-20', NULL, NULL),
(43, 6, '2025-02-19', NULL, NULL),
(44, 5, '2025-02-20', NULL, NULL),
(45, 2, '2025-02-19', NULL, NULL),
(46, 10, '2025-02-19', NULL, NULL),
(47, 2, '2025-02-19', NULL, NULL),
(48, 6, '2025-02-20', NULL, NULL),
(49, 10, '2025-02-19', NULL, NULL),
(50, 4, '2025-02-20', NULL, NULL),
(51, 4, '2025-02-20', NULL, NULL),
(52, 8, '2025-02-19', NULL, NULL),
(53, 1, '2025-02-19', NULL, NULL),
(54, 4, '2025-02-19', NULL, NULL),
(55, 2, '2025-02-19', NULL, NULL),
(56, 8, '2025-02-20', NULL, NULL),
(57, 9, '2025-02-19', NULL, NULL),
(58, 6, '2025-02-20', NULL, NULL),
(59, 3, '2025-02-20', NULL, NULL),
(60, 1, '2025-02-20', NULL, NULL),
(61, 2, '2025-02-20', NULL, NULL),
(62, 7, '2025-02-20', NULL, NULL),
(63, 2, '2025-02-19', NULL, NULL),
(64, 2, '2025-02-20', NULL, NULL),
(65, 10, '2025-02-20', NULL, NULL),
(66, 9, '2025-02-20', NULL, NULL),
(67, 4, '2025-02-20', NULL, NULL),
(68, 1, '2025-02-19', NULL, NULL),
(69, 2, '2025-02-20', NULL, NULL),
(70, 1, '2025-02-20', NULL, NULL),
(71, 10, '2025-02-19', NULL, NULL),
(72, 9, '2025-02-20', NULL, NULL),
(73, 2, '2025-02-19', NULL, NULL),
(74, 5, '2025-02-20', NULL, NULL),
(75, 4, '2025-02-19', NULL, NULL),
(76, 5, '2025-02-20', NULL, NULL),
(77, 3, '2025-02-19', NULL, NULL),
(78, 2, '2025-02-20', NULL, NULL),
(79, 8, '2025-02-19', NULL, NULL),
(80, 1, '2025-02-19', NULL, NULL),
(81, 3, '2025-02-20', NULL, NULL),
(82, 6, '2025-02-19', NULL, NULL),
(83, 6, '2025-02-19', NULL, NULL),
(84, 9, '2025-02-19', NULL, NULL),
(85, 7, '2025-02-19', NULL, NULL),
(86, 2, '2025-02-20', NULL, NULL),
(87, 7, '2025-02-19', NULL, NULL),
(88, 2, '2025-02-19', NULL, NULL),
(89, 2, '2025-02-20', NULL, NULL),
(90, 2, '2025-02-20', NULL, NULL),
(91, 2, '2025-02-20', NULL, NULL),
(92, 8, '2025-02-19', NULL, NULL),
(93, 8, '2025-02-20', NULL, NULL),
(94, 6, '2025-02-20', NULL, NULL),
(95, 4, '2025-02-19', NULL, NULL),
(96, 8, '2025-02-20', NULL, NULL),
(97, 2, '2025-02-19', NULL, NULL),
(98, 9, '2025-02-20', NULL, NULL),
(99, 2, '2025-02-20', NULL, NULL),
(100, 5, '2025-02-19', NULL, NULL),
(101, 3, '2025-02-19', NULL, NULL),
(102, 7, '2025-02-19', NULL, NULL),
(103, 5, '2025-02-19', NULL, NULL),
(104, 4, '2025-02-19', NULL, NULL),
(105, 6, '2025-02-20', NULL, NULL),
(106, 7, '2025-02-19', NULL, NULL),
(107, 4, '2025-02-20', NULL, NULL),
(108, 9, '2025-02-19', NULL, NULL),
(109, 3, '2025-02-20', NULL, NULL),
(110, 2, '2025-02-19', NULL, NULL),
(111, 4, '2025-02-19', NULL, NULL),
(112, 8, '2025-02-19', NULL, NULL),
(113, 8, '2025-02-19', NULL, NULL),
(114, 1, '2025-02-19', NULL, NULL),
(115, 4, '2025-02-20', NULL, NULL),
(116, 5, '2025-02-19', NULL, NULL),
(117, 8, '2025-02-19', NULL, NULL),
(118, 3, '2025-02-19', NULL, NULL),
(119, 5, '2025-02-19', NULL, NULL),
(120, 3, '2025-02-20', NULL, NULL),
(121, 9, '2025-02-20', NULL, NULL),
(122, 6, '2025-02-19', NULL, NULL),
(123, 4, '2025-02-20', NULL, NULL),
(124, 8, '2025-02-19', NULL, NULL),
(125, 4, '2025-02-19', NULL, NULL),
(126, 1, '2025-02-19', NULL, NULL),
(127, 5, '2025-02-19', NULL, NULL),
(128, 6, '2025-02-20', NULL, NULL),
(129, 6, '2025-02-20', NULL, NULL),
(130, 10, '2025-02-19', NULL, NULL),
(131, 6, '2025-02-19', NULL, NULL),
(132, 7, '2025-02-19', NULL, NULL),
(133, 6, '2025-02-20', NULL, NULL),
(134, 4, '2025-02-20', NULL, NULL),
(135, 4, '2025-02-20', NULL, NULL),
(136, 10, '2025-02-20', NULL, NULL),
(137, 6, '2025-02-20', NULL, NULL),
(138, 4, '2025-02-19', NULL, NULL),
(139, 6, '2025-02-20', NULL, NULL),
(140, 9, '2025-02-19', NULL, NULL),
(141, 6, '2025-02-20', NULL, NULL),
(142, 10, '2025-02-19', NULL, NULL),
(143, 5, '2025-02-19', NULL, NULL),
(144, 1, '2025-02-19', NULL, NULL),
(145, 3, '2025-02-20', NULL, NULL),
(146, 7, '2025-02-20', NULL, NULL),
(147, 7, '2025-02-19', NULL, NULL),
(148, 7, '2025-02-20', NULL, NULL),
(149, 10, '2025-02-20', NULL, NULL),
(150, 8, '2025-02-19', NULL, NULL),
(151, 9, '2025-02-20', NULL, NULL),
(152, 4, '2025-02-19', NULL, NULL),
(153, 3, '2025-02-20', NULL, NULL),
(154, 8, '2025-02-20', NULL, NULL),
(155, 1, '2025-02-19', NULL, NULL),
(156, 4, '2025-02-19', NULL, NULL),
(157, 9, '2025-02-19', NULL, NULL),
(158, 9, '2025-02-20', NULL, NULL),
(159, 4, '2025-02-20', NULL, NULL),
(160, 6, '2025-02-20', NULL, NULL),
(161, 9, '2025-02-20', NULL, NULL),
(162, 2, '2025-02-20', NULL, NULL),
(163, 9, '2025-02-20', NULL, NULL),
(164, 1, '2025-02-19', NULL, NULL),
(165, 8, '2025-02-20', NULL, NULL),
(166, 1, '2025-02-20', NULL, NULL),
(167, 1, '2025-02-20', NULL, NULL),
(168, 6, '2025-02-20', NULL, NULL),
(169, 8, '2025-02-19', NULL, NULL),
(170, 2, '2025-02-20', NULL, NULL),
(171, 1, '2025-02-21', NULL, NULL),
(172, 1, '2025-02-21', NULL, NULL),
(173, 1, '2025-02-21', NULL, NULL),
(174, 1, '2025-02-21', NULL, NULL),
(175, 1, '2025-02-21', NULL, NULL),
(176, 1, '2025-02-21', NULL, NULL),
(177, 1, '2025-02-21', NULL, NULL),
(178, 1, '2025-02-21', NULL, NULL),
(179, 1, '2025-02-21', NULL, NULL),
(180, 1, '2025-02-21', NULL, NULL),
(181, 1, '2025-02-21', NULL, NULL),
(182, 1, '2025-02-21', NULL, NULL),
(183, 1, '2025-02-21', NULL, NULL),
(184, 1, '2025-02-21', NULL, NULL),
(185, 1, '2025-02-21', NULL, NULL),
(186, 1, '2025-02-21', NULL, NULL),
(187, 1, '2025-02-21', NULL, NULL),
(188, 1, '2025-02-21', NULL, NULL),
(189, 1, '2025-02-21', NULL, NULL),
(190, 1, '2025-02-21', NULL, NULL),
(191, 1, '2025-02-21', NULL, NULL),
(192, 1, '2025-02-21', NULL, NULL),
(193, 1, '2025-02-21', NULL, NULL),
(194, 1, '2025-02-21', NULL, NULL),
(195, 1, '2025-02-21', NULL, NULL),
(196, 1, '2025-02-21', NULL, NULL),
(197, 1, '2025-02-21', NULL, NULL),
(198, 1, '2025-02-21', NULL, NULL),
(199, 1, '2025-02-21', NULL, NULL),
(200, 1, '2025-02-21', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2025_02_20_110937_create_jabatan_table', 1),
(5, '2025_02_20_111157_create_unit_table', 1),
(6, '2025_02_20_111301_create_karyawan_table', 1),
(7, '2025_02_20_111302_create_karyawan_jabatan_table', 1),
(8, '2025_02_20_150048_create_login__table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `username` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `unit`
--

CREATE TABLE `unit` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nama` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `unit`
--

INSERT INTO `unit` (`id`, `nama`, `created_at`, `updated_at`) VALUES
(1, 'IT', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(2, 'HRD', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(3, 'Keuangan', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(4, 'Marketing', '2025-02-20 18:09:21', '2025-02-20 18:09:21'),
(5, 'Operasional', '2025-02-20 18:09:21', '2025-02-20 18:09:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jabatan`
--
ALTER TABLE `jabatan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `karyawan_username_unique` (`username`),
  ADD KEY `karyawan_unit_id_foreign` (`unit_id`);

--
-- Indexes for table `karyawan_jabatan`
--
ALTER TABLE `karyawan_jabatan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `karyawan_jabatan_karyawan_id_foreign` (`karyawan_id`),
  ADD KEY `karyawan_jabatan_jabatan_id_foreign` (`jabatan_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD KEY `login_karyawan_id_foreign` (`karyawan_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `unit`
--
ALTER TABLE `unit`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jabatan`
--
ALTER TABLE `jabatan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `karyawan`
--
ALTER TABLE `karyawan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `karyawan_jabatan`
--
ALTER TABLE `karyawan_jabatan`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=201;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `unit`
--
ALTER TABLE `unit`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD CONSTRAINT `karyawan_unit_id_foreign` FOREIGN KEY (`unit_id`) REFERENCES `unit` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `karyawan_jabatan`
--
ALTER TABLE `karyawan_jabatan`
  ADD CONSTRAINT `karyawan_jabatan_jabatan_id_foreign` FOREIGN KEY (`jabatan_id`) REFERENCES `jabatan` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `karyawan_jabatan_karyawan_id_foreign` FOREIGN KEY (`karyawan_id`) REFERENCES `karyawan` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `login`
--
ALTER TABLE `login`
  ADD CONSTRAINT `login_karyawan_id_foreign` FOREIGN KEY (`karyawan_id`) REFERENCES `karyawan` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
